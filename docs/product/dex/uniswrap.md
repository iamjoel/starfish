# Uniswrap
交易 ERC-20 token。

自动做市规则：遵循恒定乘积规则。第一个人上某个token 来定汇率，并按该汇率来存两种代币。汇率总是由当前两种币的数量来决定：兑换前后两种币的总数的乘ji保持不变。如果外部的汇率和这不同，用户会兑换价格被低估的代币，被低估的代码的数量就会变少，代码的价格就上升了，最后会和外部汇率持平。

LP(liquidity provider): 提供流动性的人。任何人都可以成为 LP。只要存入两种 ERC-20 的token。
流动性头寸（liquidity position）:
交易费给提供给 LP， L2 的交易费是 0.03%。

相对 Cex，上 token 的门槛低。


## V1/2/3 的区别
> Uniswap V1证明了自动做市商（AMM）的可能性，Uniswap v2优化自动做市商（AMM）早期不足，Uniswap V3结合了标准AMM和稳定资产AMM的好处，极大的提高了资本效率。
> [Uniswap V1/V2/V3 AMM做市全面解析](https://zhuanlan.zhihu.com/p/398006442)

### V3
[Concentrated Liquidity](https://docs.uniswap.org/concepts/protocol/concentrated-liquidity)
V3 的优化:提升了资产使用的效率。

V2 中，流动性沿着价格曲线均匀分布。虽然这样可以处理 0 到无穷之间的所有价格区间，但这使得资本的效率相当低下。这是因为大多数资产通常在一定的价格范围内交易。

V3 中，LP 自己选择价格区间(两个token的比例)，如果这个区间覆盖了成交价格，则可以获得交易费分成。LP 可以在多个价格区间提供流动性。工具: [Uniswap V3 Calculator & Simulator](https://www.metacrypt.org/tools/uniswap-v3-calculator-simulator/?network=ethereum&token0=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&token1=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&feeTier=3000)

范围限价订单（Range Limit Orders）：允许 LP 在高于或低于当前市场自定义价格范围内提供单一代币作为流动性。当市场价格进入指定范围时，一种资产将沿着平滑曲线出售给另一种资产——同时在此过程中仍可赚取掉期费用。

弹性费用：V3 没有提供 Uniswap V2 中的标准 0.3% 交易费，而是初步提供了 3 个独立的费用等级——0.05%、0.3% 和 1%。这使得 LPs 可以根据他们愿意承担的风险来选择资金池。Uniswap 背后的团队预计，0.05% 的费用主要用于资产类似的池子，比如不同的稳定币，0.3% 用于 ETH/DAI 等其他标准货币对，1% 用于更多的不同领域的货 币对。

V3 对 LP 的要求变高了。选择一个错误的价格区间可能会放大无常损失的影响。也许未来会有第三方服务，它可以帮助用户选择分配流动性的最佳策略。
[Uniswap V3 到底是什么鬼？一文带你了解V3新特性](https://zhuanlan.zhihu.com/p/359732262)

## Dapp中接入 Uniswrap
通过自己写的智能合约调用Uniswap: [uniswap-first-contract-example](https://github.com/Uniswap/uniswap-first-contract-example) swap 的[demo](https://github.com/Uniswap/uniswap-first-contract-example/blob/simple-swap-complete-example/contracts/SimpleSwap.sol)


直接在前端接入[widgets-cra5](https://github.com/Uniswap/widgets-demo/tree/cra)

## Uniswrap 治理的token: UNI
治理内容：发起提案(propose)，投票，改uniswap的协议额。

[关于治理(Governance)的文档](https://docs.uniswap.org/contracts/v2/reference/Governance/governance-reference)

## 计算Uniswap 的TVL
TVL: 所有锁定在合约里的token价值。

### 方法1: 用 Subgraph
[Uniswap V3 Subgraph](https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v3)

直接拿：
```
{
  factory(id: "0x1F98431c8aD98523631AE4a59f267346ea31F984" ) {
    totalValueLockedUSD
  }
}
```

返回:
```
{
  "data": {
    "factory": {
      "totalValueLockedUSD": "1088811070468.012189179066115282027"
    }
  }
}
```


在控制台看到对应的接口调用。


其他做法：

TVL 排名前 N 的值 Pool，求和
```js
{
  pools(first: 10, orderBy: totalValueLockedUSD, orderDirection: desc) 
  { id, token0{symbol}, token1{symbol}, totalValueLockedUSD, volumeUSD}
}
```

需要把数组里 totalValueLockedUSD 求和。

按小时统计：
```js
{
  poolHourDatas(first: 10, orderBy: tvlUSD, orderDirection: desc) 
  { tvlUSD, volumeUSD, pool{token0{symbol}, token1{symbol}}}
}
```

### 方法2： 自己算。找合约，求和
Uniswap V3 
找 Uniswap V3 所有流动性 Pool 的合约地址，获取里面的 token 价值的和。截至至 2022/12/15，Pool 有9610 个。

获得合约地址：
```js
// 1
function getPoolKey(
  address tokenA,
  address tokenB,
  uint24 fee
) internal returns (struct PoolAddress.PoolKey)

// 2
function computeAddress(
  address factory,
  struct PoolAddress.PoolKey key
) internal returns (address pool)
```
[完整介绍](https://docs.uniswap.org/contracts/v3/reference/periphery/libraries/PoolAddress)

获取地址的token：
```
balanceToken0 = poolContract.functions.balanceOf(token0Address).call()
```

更细致一点的，token的value里要去掉费用。见[How to calculate Uniswap v3 pool's Total Value Locked (TVL) on chain?](https://tagmerge.com/question/how-to-calculate-uniswap-v-pool-s-total-value-locked-tvl-on-chain)。

拓展阅读： [Uniswap v3的TVL计算可能是错误的](https://chain-times.cn/news/3168)


## API
可以查到
* 全局数据
* 交易对(pairs)的情况
* token的情况。

获取：
factory address id？
pairs 的id
token 的 id

token1Price 的单位是什么？



## 工具
* [Overview of Uniswap](https://github.com/Uniswap/universe)
* [Uniswap 上各个token的数据](https://info.uniswap.org/#/) 价格，成交量(VOL: Volumes)，TVL。
  *[Playground](https://thegraph.com/explorer/subgraphs/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7?view=Playground)
  * [Coinmarketcap](https://coinmarketcap.com/api/documentation/v1/) 获取数据的
* [SubGraph](https://docs.uniswap.org/api/subgraph/overview) 查询详细的数据。用的是[The Graph](https://thegraph.com/zh/) The Graph是一个索引协议，用于查询以太坊和IPFS等网络。任何人都可以建立和发布开放的API，称为子图，使数据易于访问。用 GraphQL 的方式查。
  * [V2](https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v2) 用 GraphQL 的语法。 示例值: [这里](https://docs.uniswap.org/contracts/v2/reference/API/queries)
  * [V3](https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v3)。示例: [这里](https://docs.uniswap.org/api/subgraph/guides/examples)。

## Doc
* [uniswrap 自动做市的原理](https://docs.uniswap.org/contracts/v2/concepts/protocol-overview/how-uniswap-works)
* [Uniswrap 的生态](https://docs.uniswap.org/contracts/v2/concepts/protocol-overview/ecosystem-participants)
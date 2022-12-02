# 钱包
## 概念

### EOA
EOA(Externally Owned Accounts) :外部账户。MetaMask 生成的地址就是 EOA。

EOA 地址生成规则：
```
私钥 → 公钥 → Keccak256 哈希 → 最后 20 Bytes → 十六进制字符串
```

节点验证一笔交易是否被地址 owner 授权的规则：
```
交易签名 → ec_recover → 公钥 → EOA 是否等于 实际执行操作的地址
```

注意：EOA 是以太坊以及其他 EVM 兼容链（或类 EVM 链）才有。

### CA
CA(Contract Accounts) : 叫做 合约账户（也曾被称为内部账户）。常见的 ERC-20 代币合约、DeFi 业务合约等都有一个跟 EOA 长得很像的地址，这就是 CA。

CA 上是可以存 ETH 的。以太坊上除 ETH 之外的所有资产都是由 CA 承载，DeFi 等业务逻辑就更是全都由 CA 来实现。

### SCW/A
SCW/A(Smart Contract Wallet/Account): 智能合约钱包。用 CA 作为地址的钱包方案。

由于智能钱包具备内部逻辑，智能合约钱包可以实现很多 EOA 无法实现的功能，比如 gas 代付，多签，批量交易，权限管理，离线授权，社交恢复等等。

EOA的缺点： 密钥如果丢了，上面的资产就没了；如果密钥被别人知道了，上面的资产就可以被转移。

ERC-4337 定义了一些 SCW 应该实现的接口，以及元交易打包、gas 代付等基础设施的框架。它的出现让目前差异极大的各种 SCW 方案能够拥有统一的用户交互界面以及共用一些生态层面搭建的开放基础设施，有助于各种场景快速实现自己需要的 SCW 方案。

#### Seedless
seed 指的是 seed phrase(助记词)。seedless 的意思就是「无助记词的」，或者也可以说成「无私钥的]。

#### Social Recovery
社交恢复：利用社交关系帮助用户在丢失密钥的情况下重新获得账户访问权的机制。如果你用微信登录过新设备，应该有过「让你的两个朋友发送 xxx 给你的账号以登录」的体验——这就是社交恢复想达到的效果，只不过验证方从微信变成了智能合约。

#### Non-custodial
非托管：
1. 钱包开发商无法擅自操作用户的账户
1. 钱包开发商无法阻止用户操作自己的账户

### AA
AA(Account Abstraction): 帐号抽象。描述：

> Achieve the key goal of account abstraction: allow users to use smart contract wallets containing arbitrary verification logic instead of EOAs as their primary account. Completely remove any need at all for users to also have EOAs (as status quo SC wallets and EIP-3074 both require)

以太坊对于账户抽象的期望是改变目前大多数人都在使用 EOA 的现状，希望用户转向 SCW，并且把生态对 EOA 的依赖完全去除。

以太坊原生不支持 AA。很多链原生已经具备了不同程度的 AA 特性。比如 EOS / Polkadot / Near / Solona / Flow / Aptos … 甚至 BTC（单签 / 多签 / Taproot），这些链在设计时就已经将账户做成了有内部结构甚至具备权限管理能力的状态，还有 StarkNet / CKB 等具备更完善的账户抽象能力。说到这里大家不难发现，以太坊的 AA 是在解决 EOA 意外地流行带来的历史遗留问题，从而在账户层面上变得更加先进和灵活。

### MPC
MPC(Multi-Party Computation): 多方安全计算。

> 针对无可信第三方情况下，安全地进行多方协同的计算问题。即在一个分布式网络中，多个参与实体各自持有秘密输入，各方希望共同完成对某函数的计算，而要求每个参与实体除计算结果外均不能得到其他参与实体的任何输入信息

MPC 其实是一种范式，包含很多技术方案，在目前 Web3 的语境下大都指的是 TSS。

MPC 是通过分散控制权来达成风控或者灾备能力。

### TSS
TSS(Threshold Signature Scheme): 门限签名。他是一种分布式多方签名协议，包含分布式密钥生成、签名，以及在不改变公钥的情况下更换私钥碎片的 re-sharing 等算法。


## 文章
* [名词解释：Web3 账户相关概念大梳理](https://mirror.xyz/zhixian.eth/dACTTYPzEfRcF6jSE_iwJsnbNmN2Ier_NA_TzkZaOeM)。知县。
* [论账户抽象(2022)](https://mirror.xyz/0xbeC73ba0817403cd11C11bE891D671EA30443562/95LlE7sLCL4UTvL7rU3ZAXnBvlDbh7X-rm0QWkc43Us)

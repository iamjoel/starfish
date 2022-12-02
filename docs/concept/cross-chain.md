# 跨链
跨链一般转移的都是资产(代币，NFT) ，数据(信息)，事件等。

链，Dapp 开发者，用户 都有 跨链的需求。
* 链：通过跨链获得其他链的生态。比如，有的链有专门的关注点：性能，安全，隐私等。
* Dapp 开发者：获得不同链上的用户。
* 用户：在一个链上，用不同链上的app，资产在不同链上转移。


## 技术方案
三种方案： 中继，见证人，哈希时间锁。

见证人和中继都是链下进程，它们负责把消息转来转去：它看到A链上发生了一件事，就告诉B链。区别：
* 见证人：在目标链上收到一个消息后，如果是见证人跨链，验证的是这条消息来自于见证人，如果我相信见证人，我就相信这个消息，就执行该执行的操作。
* 中继： 验证的不是这条消息来自于哪个中继，我验证的是这条消息是不是来自于源链，如果是，就执行该执行的操作。

保证跨链桥的安全性。跨链桥常采用外部中继人的模式。中继是无法做恶的，如果一个中继提交的信息不是来自于源链，目标链验证之后会把它识别出来。但是见证人是可以做恶的，它可以造出一个消息发给目标链，目标链验证它是来自于自己相信的见证人后，就会执行这个操作。

中继跨链的要求比较高。目标链需要有源链的轻客户端来验证交易。

### 中继
目标链需要有源链的轻客户端：粗略地理解为类似于比特币SPV 的机制（需要有所有区块头)。中继不但要把消息给我，还要把消息的证明给我，这个证明是一个Merkle Proof，它告诉我这个事件或这笔交易是发生在你这条链上的哪个区块（高度）。在一条链存另外一条链的区块头需要gas费

以太坊上能不能实现别的链的轻客户端呢？要看实现的难度。以太坊需要用智能合约实现轻客户端，但智能合约是有gas 限制的，所以轻客户端验证的计算量是要能够容纳到Gas Limit 以内的。

### 见证人
见证人(一些受信任的节点)来验证。MPC 属于见证人的方案。

比如：有21 个节点，每个节点拿一片私钥，如果设置为15/21，那这21 个节点里需要有15 个节点通过了签名，然后形成一个ECDSA 的签名，认为这交易是可信的。

### 哈希锁(Hash Time Lock Contract)
哈希时间锁扩展成叫外部协调。外部协调是指在跨链的全过程中，两条链是互不知道对方的，A 链不知道B 链上发生了什么，B链不知道A链上发生了什么。

哈希锁最大的一个应用就是中心化的交易所。比如我们是先在A 上面做一个交易，拿到哈希之后，再把这个哈希提交给B，这是两个用户钱包在做协调的跨链，两条链本身是不知道对方链的。

闪电网络的底层技术就是哈希锁定，其基本原理如下：
A 和 B 可以达成协议，协将锁定 A 的 1BTC，在时刻 T 到来之前（T 以未来的某个区块链高度表述），如果 B 能够向 A 出示一个适当的 R，使得 R 的哈希值等于事先约定的值 H(R)，B 就能获得这 1BTC；如果直到时刻 T 过去了，B 仍然未能提供一个正确的 R，这 BTC 将自动解冻并归还 A。这个过程产生随机数和验证随机数的过程。

哈希锁是中心化的。

## 波卡
> 波卡的主链叫做中继链，加入进来的区块链叫做平行链。其他区块链(愿意改造的）可以插入插槽成为平行链，比特币和以太坊没法直接插入插槽，只能通过转接桥的方式成为平行链。
> 数据跨链，通过插槽上的XCMP协议。
> 资产跨链。资产转到连接桥的合约地址，锁定。验证没问题后，通过数据跨链(XCMP)，将信息传到目标链，然后将资产转到目标地址。
> 转接桥验证交易的去中心化机制：转接桥的收集人，需要质押BTC，如果运行收集人节点掉线，或者作恶，系统将会惩罚质押的BTC，当然如果收集人表现良好，系统也会有奖励作为收集人的激励。跨链手续费作为给收集人的激励。
> [全面认知波卡——跨链](https://baijiahao.baidu.com/s?id=1672612655749165657)


## Multichain
> 业务运行的核心是一个基于 SMPC（安全多方计算）的多链节点网络，该网络所采用的多签管理方案为 TSS（门限签名方案）。TSS 方案的特点是允许多方节点共同生成密钥和签名，但任何一方都不会拥有完整的密钥，即未经其他节点联合同意，任何节点都无法通过私自签名来作恶，这也是 Multichain 安全性及去中心化的基础保障。
> 锁定在 Anyswap 智能合约内的资产总价值高达 51.2 亿美元，这一数字在所有第三方跨链桥项目中遥遥领先。庞大的流动性池允许 Anyswap 处理其他多数同类项目所无法处理的超大额交易，这反过来又成为了 Anyswap 最大的护城河之一，形成了正向的增长循环。
> [从Anyswap到Multichain，跨链桥龙头的炼成之路](https://zhuanlan.zhihu.com/p/451731293)

采用的是见证人的方案来跨链。一些节点跑验证交易程序，通过多签(MPC)的方式，来确认交易是否合法。

支持
1. Bridge. 资产跨链。用户的资产转移到并锁定在安全钱包(SMPC wallet address)，通过验证后，在目标链，智能合约把资产转给用户，然后解锁安全钱包里对应的资产。[详细说明](https://docs.multichain.org/getting-started/how-it-works/cross-chain-bridge)
2. Router
3. anyCall Crosschain Contract Calls
4. Crosschain NFT Bridges and Router

已开源: [GitHub](https://github.com/anyswap/CrossChain-Bridge)。

[文档](https://docs.multichain.org/getting-started/introduction)


## 产品
1. Polkadot 波卡
2. Cosmos
3. [XY Finance](https://xy.finance/)
4. [xPollinate（Connext）](https://www.xpollinate.io/)
5. [Wormhole](https://wormholebridge.com/#/)
6. [Terra Bridge](https://bridge.terra.money/)
7. [Teleportr](https://portr.xyz/) 改名叫 [optimism](https://app.optimism.io/bridge/deposit) 了。
8. [cBridge（Celer Network）](https://cbridge.celer.network/)
9. [ChainSwap](https://exchange.chainswap.com/)
10. [FibSwap DEx](https://dex.fibswap.io/)
11. [Hop Protocol](https://app.hop.exchange/send)
12. [Horizon](https://bridge.harmony.one/)
13. [Hyphen（Biconomy）](https://hyphen.biconomy.io/)
14. [Li.Finance](https://bridge.harmony.one/)
15. [Mosaic（Composable.Finance）](https://mosaic.composable.finance/)
16. [Multichain.xyz](https://multichain.xyz/)
17. [NerveBridge](https://bridge.nerve.network/)

## 文章
* [一文详解跨链的技术点及难点：从完美跨链谈起](https://learnblockchain.cn/article/1553)




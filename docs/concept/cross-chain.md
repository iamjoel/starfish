# 跨链桥
链，Dapp 开发者，用户 都有 跨链的需求。
* 链：通过跨链获得其他链的生态。比如，有的链有专门的关注点：性能，安全，隐私等。
* Dapp 开发者：获得不同链上的用户。
* 用户：在一个链上，用不同链上的app，资产在不同链上转移。

跨链一般转移的都是资产(代币) 。也会有 NFT。也会有信息，事件等。

## 技术方案
保证跨链桥的安全性。跨链桥常采用外部中继人的模式。

## Multichain
> 业务运行的核心是一个基于 SMPC（安全多方计算）的多链节点网络，该网络所采用的多签管理方案为 TSS（门限签名方案）。TSS 方案的特点是允许多方节点共同生成密钥和签名，但任何一方都不会拥有完整的密钥，即未经其他节点联合同意，任何节点都无法通过私自签名来作恶，这也是 Multichain 安全性及去中心化的基础保障。
> 锁定在 Anyswap 智能合约内的资产总价值高达 51.2 亿美元，这一数字在所有第三方跨链桥项目中遥遥领先。庞大的流动性池允许 Anyswap 处理其他多数同类项目所无法处理的超大额交易，这反过来又成为了 Anyswap 最大的护城河之一，形成了正向的增长循环。
> [从Anyswap到Multichain，跨链桥龙头的炼成之路](https://zhuanlan.zhihu.com/p/451731293)

支持
1. Bridge. 资产跨链。用户的资产转移到并锁定在安全钱包(SMPC wallet address)，通过验证后，在目标链，智能合约把资产转给用户，然后解锁安全钱包里对应的资产。[详细说明](https://docs.multichain.org/getting-started/how-it-works/cross-chain-bridge)
2. Router
3. anyCall Crosschain Contract Calls
4. Crosschain NFT Bridges and Router

已开源: [GitHub](https://github.com/anyswap/CrossChain-Bridge)。

[文档](https://docs.multichain.org/getting-started/introduction)


## 产品
1. [XY Finance](https://xy.finance/)
2. [xPollinate（Connext）](https://www.xpollinate.io/)
3. [Wormhole](https://wormholebridge.com/#/)
4. [Terra Bridge](https://bridge.terra.money/)
5. [Teleportr](https://portr.xyz/) 改名叫 [optimism](https://app.optimism.io/bridge/deposit) 了。
6. [cBridge（Celer Network）](https://cbridge.celer.network/)
7. [ChainSwap](https://exchange.chainswap.com/)
8. [FibSwap DEx](https://dex.fibswap.io/)
9. [Hop Protocol](https://app.hop.exchange/send)
10. [Horizon](https://bridge.harmony.one/)
11. [Hyphen（Biconomy）](https://hyphen.biconomy.io/)
12. [Li.Finance](https://bridge.harmony.one/)
13. [Mosaic（Composable.Finance）](https://mosaic.composable.finance/)
14. [Multichain.xyz](https://multichain.xyz/)
15. [NerveBridge](https://bridge.nerve.network/)




# Starfish
> 一只断了一条腿的蜘蛛是什么蜘蛛呢？  
> 是七条腿的蜘蛛。  
> 一只断了一条腿的海星是什么海星呢？  
> 还是一只完整的海星。  
> \- [《去中心化VS中心化，无法调和的矛盾？》](https://zhuanlan.zhihu.com/p/34510014)

Web3 学习笔记。 Web3：去中心化，透明，安全，匿名。

## 概念
1. Web1，Web2，Web 3 的区别。
2. 区块链
3. 智能合约

### Web1，Web2，Web 3 的区别
Web1: 只读网络。 网络的内容都是公司生产的。代表性产品主要是门户网站：新浪，搜狐，网易等。

Web2: 读写网络。 个人开始参与内容的生产。代表产品：微博，头条，抖音等。

Web3: 去中心化，安全的网络。数据的所有权属于内容的生产者。这些数据指存在区块链上的数据。这些数据是透明的，谁都可以访问，只要数据存的链还有人在用，数据就在。

### 区块链
区块链：分布式账本。可以理解成分布式数据库。

区块链上存：
1. 智能合约
2. 对智能合约的操作记录

### 智能合约
智能合约：读写链上的状态。

区块链如果是一个数据库，智能合约可以理解为一张表，以及对表的操作。

### 其他
* [ZK 证明](docs/concept/zk.md)

## 基础设施
* 区块链
* 跨链桥
* 去中心化储存方案
* 预言机


### 区块链
> 将对中心的信任，转化到对算法的信任。

#### 共识机制
常见的 Pow 和 PoS。

Eth 在 2022年10月，从 Pow 转向了 Pos。为了以为支持分片(一种能提升交易速度的手段）等一系列的升级。


#### Layer1
区块链的不可能三角： 扩展性（Scalability）、去中心化（Decentralization）、安全（Security）。扩展性指交易的速度。

比特币和 Eth 选的安全性和去中心化。

Solana，aptos 选的的拓展性和。

##### 编程语言
* solidity： Eth 和一些兼容 env 的链。
* Move: Aptos,Sui 和 starcoin。

还有用：go，c#，rust的。

#### Layer2
给 Layer1 扩容：增加每秒处理速度。

polygen 等。

### 跨链桥
> 跨链桥是将代币或数据在不同区块链之间转移的方式，两条链可以具有不同的协议、规则和治理模型，跨链桥提供了一种兼容的方式在两者之间安全地进行互操作。

跨链桥比较难的是做到安全。号称黑客提款机。[更多](./docs/concept/cross-chain.md)


产品:
* [十大主流生态跨链桥整理](https://mirror.xyz/3344521.eth/dD-QSbnCeJIFYcewKErp9Hcnc2Lh8oNSWU0G67Yh76s)
* [wormhole](https://wormhole.com/)
* [layerzero](https://layerzero.network/)


### 去中心化储存方案
我们通常会将资产的元数据、DApp UI 界面等储存在去中心化储存网络当中，以防止单点故障导致的资产损失和不可用。

常见的方案：
* IPFS：最早和最流行的去中心化储存网络。
* Filecoin：以 IPFS 为基础的储存网络。
* Arweave(AR)：去中心化的永存网络，一次写入付费，读数据免费。

### 预言机
合约读取链下的数据的工具。

产品 [Chainlink](https://chain.link/)
> Securely connect smart contracts with off-chain data and services


## 应用场景
* Defi
* NFT
* GameFi
* Dao

### Defi
DEX: 去中心化交易。  
CEX: 中心和交易。

跨国界。

### NFT
非同质化化Token。门槛低，受众广。

NFT 对应的原数据：图片，音频，视频等，是存在 IPFS 上的。

NTF市场：OpenSea。

### GameFi
Axie,StepN。

NFT + DeFi 
道具上链。

玩法上链。

### Dao
代币（经济）（ERC20） + 治理（成员的进入，离开； 荣耀（贡献值）体系，投票）

## 开发指南
### 概览
* 开发
  * 编程语音：Solidity(Evm 上的编程语言)。
  * 与区块链交互：Relay层。Alchemy，Infura等提供的服务。
  * 调用智能合约 eth.js, web3.js
  * Hardhat: 编译到本地，用 eth.js 和智能合约交互。 [代码](./code/hardhat-demo/scripts/token.js)
* 测试
  * 测试网络
* 安全扫描
  * 整数溢出问题。 防御库：SafeMath
* 部署
  * Remix
* 优秀代码
  * [openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
  * [moloch](https://github.com/MolochVentures/moloch)
* 一站式框架
  * thirdweb.js.  包含： 合约的调用，协议的实现， 部署

### 常见协议及其实现
* 代币协议：ERC20
* 常规的NFT： ERC721（NTF那）

具体的实现可参考:
* [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/)。
* [thirdweb Contracts](https://github.com/thirdweb-dev/contracts)

### 业务场景
1 更新智能合约的逻辑。通过代理的方式。  
入口智能合约是个代理，可以设置实际执行合约的地址。逻辑更新时，改的是执行合约的地址。

2 安全性。 SWC。


## 链接
* [资源](docs/resource.md)
* [工具](docs/tools.md)
* [安全](docs/security/README.md)
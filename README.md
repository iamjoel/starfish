# Web3 Note
去中心化，透明，安全，匿名。

链接：
* [资源](docs/resource.md)
* [工具](docs/tools.md)

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

## 基础设施
* 区块链
* 去中心化存储（IPFS），
* 预言机
* 一些理论支持: zk证明等。


## 应用场景

## 开发指南
### 工具
Relay；测试网络；工作流(编译，发布)；

智能合约
* 开发
* 测试
  * 测试网络
* 安全扫描
  * 整数溢出问题。 防御库：SafeMath
* 部署
  * Hardhat
  * Remix
* 优秀代码
  * [openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
  * [moloch](https://github.com/MolochVentures/moloch)




存的数据（存的智能合约和操作记录）不能被修改和删除。

透明：
任何人都可以
看区块链上的数据。也都可以调用智能合约里暴露出来的方法操作，以及监听事件。

## 共识机制
常见的 Pow 和 PoS。

Eth 在 2022年10月，从 Pow 转向了 Pos。为了以为分片的升级。

## Layer1
区块链的不可能三角： 扩展性（Scalability）、去中心化（Decentralization）、安全（Security）。扩展性指交易的速度。

比特币和 Eth 选的安全性和去中心化。

Solana，aptos 选的的拓展性和。

## 编程语言
* solidity： Eth 和一些兼容 env 的链。
* Move: Aptos 和 Sui： 

还有用：go，c#，rust的。

# Layer2
给 Layer1 扩容：增加每秒处理速度。

pologen。

# 调用智能合约
eth.js, web3.js

# 协议的实现

ERC20，ERC721（NTF那）
实现的库https://github.com/OpenZeppelin/openzeppelin-contracts/
openZeppelin


# 一站式框架
重一点的框架： thirdweb.js.  包含： 合约的调用，协议的实现， 部署，

# Relay
> 这个角色隐藏在 Provider/Signer 之后，是真正负责我们与区块链的某一个节点同步状态的服务器集群，它保存了所有账本（全节点）它通常是 Infura、Alchemy、Quicknode、Moralis 或者 Pocket 提供的服务。

# 预言机
## [Chainlink](https://chain.link/)
> Securely connect smart contracts with off-chain data and services


# 业务场景
1. 更新智能合约的逻辑。 
入口智能合约是个代理，可以设置实际执行合约的地址。逻辑更新时，改的是执行合约的地址。

2. 匿名地址

# Defi
DEX: 去中心化交易。  
CEX: 中心和交易。

# NFT
OpenSea。

门槛低，受众广。

NFT 对应的 图片，音频，视频等，是存在 IPFS 上的。

# GameFi
Axie,StepN。

NFT + DeFi 
道具上链。

玩法上链。

# Dao
代币（经济）（ERC20） + 治理（成员的进入，离开； 荣耀（贡献值）体系，投票）
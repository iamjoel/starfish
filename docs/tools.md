# 工具
## [StackExchange](https://ethereum.stackexchange.com/)
Eth的问答网站。类似stackoverflow。
## Solidity
### [Remix IDE](https://remix.ethereum.org/)
Solidity 的 Web IDE，集成了编译器和 Solidity 运行时环境。

### [Hardhat](https://hardhat.org/)
工具流。

### [Alchemy](https://www.alchemy.com/)
可靠的访问公链的工具。它保存了所有账本（全节点）和状态同步。

Alchemy支持：ETH、Polygon、Solana、Arbitrum、Optimism。

类似的工具：[Infura](https://infura.io/zh)，Quicknode、Moralis、Pocket。

还不错的教程: [Alchemy 连接链下与链上的桥梁](https://mp.weixin.qq.com/s/Aij1PUB0IFqrE5gAnQDamQ)。

## [ganache](https://www.npmjs.com/package/ganache)
本地 fork 一个测试网络的工具。

安装
```
npm install ganache --global
```

启动
```
ganache
```


## 操作库
* [web3js](https://web3js.org/)
* ethers.js
* hooks 库
  * [wagmi](https://wagmi.sh/) react hooks 库。
  * [useDapp](https://github.com/TrueFiEng/useDApp)

## UI 库
* [Web3 UIKit](https://github.com/web3ui/web3uikit) [演示](https://web3ui.github.io/web3uikit/?path=/story/1-web3-parse-blockie--custom-seed) [官网](https://usedapp.io/)


## 代码脚手架
Scaffold-ETH 系列。整合的技术栈：
* Solidity for writing smart contracts.
* Hardhat for running local networks, deploying and testing smart contracts.
* React for building a frontend, using many useful pre-made components and hooks.
* Ethers.js for interacting with deployed smart contracts and the frontend
* Ant for your UI. Can be easily changed to Bootstrap or some other library you prefer.

具体：
* [Scaffold-ETH](https://github.com/scaffold-eth/scaffold-eth)
* [Scaffold-ETH + ▲ Next.js](https://github.com/scaffold-eth/scaffold-eth/tree/scaffold-nextjs)

## 数据
* 链上大数据分析平台
  * [Dune](https://dune.com/) 用SQL的方式查询链上数据
  * [Nansen](https://www.nansen.ai/) [各种Web3产品的研报(Reports)](https://www.nansen.ai/reports)
  * [Footprint Analytics](https://www.footprint.network/)
    * [API](https://docs.footprint.network/reference/get_token-transfers)
* 监控报警
  * [Forta](https://forta.org/) Forta detects threats and anomalies on DeFi, NFT, governance, bridges and other Web3 systems in real-time. 
    * [GraphQL API](https://docs.forta.network/en/latest/forta-api-reference/#query-project) [projects](https://github.com/ethereum-lists/contracts/tree/main/projects)
    * [Demo](https://github.com/forta-network/forta-bot-examples)
  * [defi pulse](https://www.defipulse.com/)
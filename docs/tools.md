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
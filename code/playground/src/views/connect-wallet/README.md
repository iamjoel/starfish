# Connect to Meta mask
基于工具库 [ethers.js](https://www.npmjs.com/package/ethers?activeTab=readme)

## 连接到 Meta mask
```js
const doConnect = async () => {
    if(!ethereum || !ethereum.isMetaMask) {
        alert('Please install Metamask plugins')
        return
    }
   
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // 没有连接的话，会弹框。
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
}
```

## 获取帐号信息
* 地址: `await signer.getAddress()`
* 余额: `await signer.getBalance()`。需要梯子。
* 连接的链Id: `await ethereum.request({ method: 'eth_chainId' })`

## 切换链
切换到主链(Ethereum Mainnet): 
```js
await ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{chainId: '0x1'}]
})
```

## 添加链
```js
await ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [
    {
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      rpcUrls: ['https://bsc-dataseed.binance.org/']
    }
  ]
})
```

链的配置: [chainlist](https://chainlist.org/zh)

## 监听链的变化
```js
ethereum.on('chainChanged', (chainId) => {
    console.log(`chain id to ${chainId}`)
    // 重新连接获得新的 signer 或 刷新页面。
})
```


## 发送交易
```js
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [
    {
      from: ethereum.selectedAddress, // 当前的用户钱包
      to: '0x0000000000000000000000000000000000000000', // 转账目标地址
      value: '0x0',                   // 转账数量，单位为该币种最小单位（如ETH中的wei），16进制
    },
  ],
})
```

## 合约调用
```js
// https://initstack.cn/posts/metamask-intro-4/
const contractAddress = '0x...'
const abi = [
  "function greet() view returns (string)",
  "function setGreeting(string) returns (bool)"
]

// 初始化合约对象
const contract = new ethers.Contract(contractAddress, abi, provider);

// 只读方法调用
await contract.greet()

// 连接signer
const contractWithSigner = contract.connect(signer);

// 可写方法调用
tx = await contract.setGreeting('Hello, world!')
console.log(tx)
```
import {useState, useEffect} from 'react'
import { ethers } from 'ethers'
import connectToMetamask from '@/utils/connect-to-meta-mask'

const ethereum = window.ethereum
const toChainId = '0x1' // 0x38: 币安链;0x43114。https://chainlist.org/zh

function App() {
  const [signer, setSigner] = useState(null)
  const [address, setAddress] = useState('')
  useEffect(() => {
      const init = async () => {
        await doConnect()
        ethereum.on('chainChanged', (chainId) => {
            console.log(`chain id to ${chainId}`) 
            // 换链后，signer 就要换新下
            doConnect(true)
            // window.location.reload()
        })
      }
      init()
  }, [])

  const connectMetamask = async () => {
    if(signer) {
        try {
            const address = await signer.getAddress()
            const balance = await signer.getBalance()// provider.getBalance(address, "latest")
            const balanceValue = ethers.utils.formatEther(balance)
            console.log(`${address}: ${balanceValue}`)
        } catch(e) {
            console.error(e)
        }
    } else {
        doConnect()
    }
  }

  const doConnect = async (notSwitch) => {
    if(!ethereum || !ethereum.isMetaMask) {
        alert('Please install Metamask plugins')
        return
    }
    const { signer } = await connectToMetamask()
    const address = await signer.getAddress() // 同等于：window.ethereum.selectedAddress
    setAddress(address)
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log(`connected! Address: ${address}`)
    if(true) {
        return
    } 
    // 切换到 Mainnet
    if(!notSwitch && chainId !== toChainId) {
        // 会弹出框
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: toChainId}]
            })
            chainId = await ethereum.request({ method: 'eth_chainId' })
        } catch(e) {
            if(e.code === 4902) {
                console.log('chain not config in metamask')
                if(toChainId === '0x43114') {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: '0x43114',
                                chainName: 'Avalanche C-Chain',
                                rpcUrls: ['https://rpc.ankr.com/avalanche']
                            }
                        ]
                    })
                    doConnect()
                }
            }
            return
        }
    }
    // getBalance 需要梯子
    const balance = await signer.getBalance()// provider.getBalance(address, "latest")
    const balanceValue = ethers.utils.formatEther(balance)
    setSigner(signer)
    console.log(`connected! Address: ${address}, chainId: ${chainId}, balance: ${balanceValue}`)
  }
  return (
    <div className="App">
      <h1>连接到 MetaMask</h1>
      <button onClick={connectMetamask}>Connect to Metamask</button>
      {
          address && <div>address: {address}</div>
      }
    </div>
  );
}

export default App;

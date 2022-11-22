import {useState, useEffect} from 'react'
import { ethers } from 'ethers'

import './App.css';

const ethereum = window.ethereum
const toChainId = '0x1' // 0x38: 币安链;0x43114。https://chainlist.org/zh

function App() {
  const [signer, setSigner] = useState(null)

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
    // https://docs.ethers.io/v5/getting-started/#getting-started--connecting
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // 没有连接的话，会弹框。
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    const address = await signer.getAddress() // 同等于：window.ethereum.selectedAddress
    let chainId = await ethereum.request({ method: 'eth_chainId' })
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
      <button onClick={connectMetamask}>Connect to Metamask</button>
    </div>
  );
}

export default App;

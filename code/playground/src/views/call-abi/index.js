import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import connectToMetamask from '@/utils/connect-to-meta-mask'
import countABI from './abi/count.json'
// 部署到 Goerli 网络上的 https://goerli.etherscan.io/address/0xA7C2178Bdb0E252273d2C77817245F70e19F0cbe#code
const goerliChainId = '0x5'
const countContractAddress = '0xA7C2178Bdb0E252273d2C77817245F70e19F0cbe'
const ethereum = window.ethereum


const CallAbi = () => {
  const [count, setCount] = useState(0)
  const [contract, setContract] = useState(null)
  const [signer, setSigner] = useState(null)
  
  const init = async () => {
    const { signer } = await connectToMetamask()
    const contract = new ethers.Contract(countContractAddress, countABI, signer)
    setContract(contract)
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    if(chainId !== goerliChainId) {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: goerliChainId}]
        })
        window.location.reload()
        return
    }
    const res = await contract.get()
    const _count = parseInt(res._hex)
    setCount(_count)
    setSigner(signer)
  }

  const handleAddOne = async () => {
    contract.inc()
    // 要等一段时间，数据才会上链。
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
        {
            signer && (<>
                <div>count: {count}</div>
                <button onClick={handleAddOne}>Count + 1</button>
            </>)
        }
    </div>
  )
}

export default CallAbi
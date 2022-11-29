import { ethers } from 'ethers'

const ethereum = window.ethereum

const connect = async () => {
    if(!ethereum || !ethereum.isMetaMask) {
        alert('Please install Metamask plugins')
        return
    }
    // https://docs.ethers.io/v5/getting-started/#getting-started--connecting
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // 没有连接的话，会弹框。
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    return {
        provider,
        signer
    }
}

export default connect

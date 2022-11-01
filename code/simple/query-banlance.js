import Web3 from 'web3';

const rpc = 'http://127.0.0.1:8545' // ganache
const web3 = new Web3(rpc)

// 钱包余额
const queryBalance = async (account) => {
  const b_wei = await web3.eth.getBalance(account)
  const balance = web3.utils.fromWei(b_wei, 'ether')
  return balance;
};

(async() => { 
  const account = '0x21Ccb182193B89d7f4EDCFe44F4adB84Dfd870b5'
  let balance = await queryBalance(account)
  console.log(`Balance: ${balance} ETH. So rich XD.`)
})()
import { Network, Alchemy } from 'alchemy-sdk';
// https://dashboard.alchemy.com/
// Network
// {
//   ETH_MAINNET: 'eth-mainnet',
//   ETH_ROPSTEN: 'eth-ropsten',
//   ETH_GOERLI: 'eth-goerli',
//   ETH_KOVAN: 'eth-kovan',
//   ETH_RINKEBY: 'eth-rinkeby',
//   OPT_MAINNET: 'opt-mainnet',
//   OPT_KOVAN: 'opt-kovan',
//   OPT_GOERLI: 'opt-goerli',
//   ARB_MAINNET: 'arb-mainnet',
//   ARB_RINKEBY: 'arb-rinkeby',
//   ARB_GOERLI: 'arb-goerli',
//   MATIC_MAINNET: 'polygon-mainnet',
//   MATIC_MUMBAI: 'polygon-mumbai',
//   ASTAR_MAINNET: 'astar-mainnet'
// }
const settings = {
    apiKey: "Kvz8InkyikrgEikHRSEsMNvEe-7-udGQ",
    // network: Network.ETH_GOERLI,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);  
  
// Get the latest block
// const latestBlock = alchemy.core.getBlockNumber();
    
// Get all outbound transfers for a provided address
alchemy.core
    // .getTokenBalances('0x7540D7Ea64cD21c683DbD0389DF8F0bAe29BC7Bf')
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);

// Get all the NFTs owned by an address
// const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");
    
// // // Listen to all new pending transactions
// alchemy.ws.on(
//     { method: "alchemy_pendingTransactions",
//     fromAddress: "0xshah.eth" },
//     (res) => console.log(res)
// );
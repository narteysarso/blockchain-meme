require('dotenv').config({path: './.env.local'});
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
 
  networks: {
    
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "5777",       // Any network (default: none)
    },
    ropsten: {
      provider: function(){
        return new HDWalletProvider(process.env.APP_PRIVATE_KEY, process.env.API_URL)
      },
      network_id: 3,
    }
  },
  // contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      // }
    }
  }
}

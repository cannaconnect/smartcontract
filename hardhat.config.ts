require("dotenv").config();
require('hardhat-ignore-warnings');
require("hardhat-contract-sizer");
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: { 
          optimizer: { enabled: true, runs: 200 } ,
          viaIR: true,
        },
      }
    ]
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },

  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      gas: 12000000,
      blockGasLimit: 12000000
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      timeout: 200000,
      gas: 12000000,
      blockGasLimit: 12000000
    },

    production: {
      url: `${process.env.RPC_MAINET}`,
      accounts: [`0x${process.env.DEPLOY_KEY}`]
    },
  }


};

export default config;

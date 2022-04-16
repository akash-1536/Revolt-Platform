require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");
const privateKey = process.env.Private_Key;
const projectID = process.env.Project_Id;


module.exports = {
  networks: {
    hardhat: {
      chainID: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/"+projectID,
      accounts: [privateKey]
    },
    mainet: {
      url: "https://polygon-mainnet.infura.io/v3/"+projectID,
      accounts: [privateKey]
    }
  },
  localhost: {
    url: "http://localhost:8545",
    chainId: 31337
  },
  solidity: "0.8.4",
};

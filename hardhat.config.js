/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.5.16",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.g.alchemy.com/v2/YP1vHPJUuFj13HcBMlhz-MtWrQe4sI2O",
      accounts: [""],
    },
  },
};

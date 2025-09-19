require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: ["PRIVATE_KEY_HERE"] // ضع مفتاح محفظتك التجريبية هنا
    }
  }
};

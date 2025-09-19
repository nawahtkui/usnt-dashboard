require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

// إعدادات الشبكات والتحقق من وجود المفاتيح
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const RPC_TESTNET = process.env.RPC_TESTNET || "";
const RPC_MAINNET = process.env.RPC_MAINNET || "";

if (!PRIVATE_KEY || !RPC_TESTNET || !RPC_MAINNET) {
  console.warn("⚠️ تحقق من ملف .env: يجب أن يحتوي على PRIVATE_KEY و RPC_TESTNET و RPC_MAINNET");
}

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  defaultNetwork: "testnet",

  networks: {
    testnet: {
      url: RPC_TESTNET,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: RPC_MAINNET,
      accounts: [PRIVATE_KEY],
    },
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

  mocha: {
    timeout: 20000, // 20 ثانية لاختبارات الشبكة
  },
};

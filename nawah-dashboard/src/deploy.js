const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18); // 1 مليون USNT
  const USNT = await hre.ethers.getContractFactory("USNT");
  const usnt = await USNT.deploy(initialSupply);

  await usnt.deployed();

  console.log("USNT deployed to:", usnt.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// deploy.js
const hre = require("hardhat");

async function main() {
  // الحصول على الكائن المالك
  const [deployer] = await hre.ethers.getSigners();

  console.log("🔹 جاري نشر NawahToken بواسطة:", deployer.address);

  const NawahToken = await hre.ethers.getContractFactory("NawahToken");
  const token = await NawahToken.deploy();

  await token.deployed();

  console.log("✅ NawahToken تم نشره بنجاح!");
  console.log("🔹 عنوان العقد:", token.address);

  // طباعة رابط BscScan تلقائي (اختياري)
  console.log(`🔗 رابط Testnet: https://testnet.bscscan.com/address/${token.address}`);
  console.log(`🔗 رابط Mainnet: https://bscscan.com/address/${token.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


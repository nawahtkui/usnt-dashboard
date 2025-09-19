const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const initialSupply = hre.ethers.utils.parseEther("100000000"); // 100 مليون توكن
    const USNT = await hre.ethers.getContractFactory("USNT");
    const usnt = await USNT.deploy(initialSupply);

    await usnt.deployed();
    console.log("USNT deployed to:", usnt.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

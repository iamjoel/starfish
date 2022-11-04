const hre = require("hardhat");
const ethers = hre.ethers

async function main() {
const [owner] = await ethers.getSigners()
  const Token = await ethers.getContractFactory("Token");
  const hardhatToken = await Token.deploy();

  await hardhatToken.deployed();

  const ownerBalance = await hardhatToken.balanceOf(owner.address)

  console.log(`address: ${ownerBalance}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
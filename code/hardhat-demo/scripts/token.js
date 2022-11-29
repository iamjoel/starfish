const hre = require("hardhat");
const ethers = hre.ethers

async function main() {
const [owner, receiver] = await ethers.getSigners()
  const Token = await ethers.getContractFactory("Token");
  const hardhatToken = await Token.deploy();

  await hardhatToken.deployed();

  let ownerBalance = await hardhatToken.balanceOf(owner.address)

  console.log(`owner's balance: ${ownerBalance}`)

  await hardhatToken.transfer(receiver.address, 100)
  ownerBalance = await hardhatToken.balanceOf(owner.address)
  const receiverBalance = await hardhatToken.balanceOf(receiver.address)
  console.log(`owner's balance after transfer balance: ${ownerBalance}`)
  console.log(`receiver's balance: ${receiverBalance}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
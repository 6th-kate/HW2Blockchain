// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const TestToken = await ethers.getContractFactory('TestToken');

  // Deploy the contract
  console.log('Deploying TestToken...');
  const testToken = await TestToken.deploy();
  await testToken.deployed();
  console.log(`TestToken deployed to: ${testToken.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
import { ethers } from "hardhat";
import path from "path"
import { artifacts } from "hardhat";



async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());


  const AccountFactory = await ethers.getContractFactory("AccountFactory");
  const accountFactory = await AccountFactory.deploy();
  

  await accountFactory.deployed();
  // fs.writeFileSync(
  //   "../next-app/utils/contractAddress.js",
  //   `export const greeterAddress = "${accountFactory.address}"`
  // );

  console.log(
    `Account factory deployed at ${accountFactory.address}`
  );
  saveFrontendFiles(accountFactory);
}

function saveFrontendFiles(accountFactory:any) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ AccountFactory: accountFactory.address }, undefined, 2)
  );

  const AccountFactoryArtifact = artifacts.readArtifactSync("AccountFactory");

  fs.writeFileSync(
    path.join(contractsDir, "AccountFactory.json"),
    JSON.stringify(AccountFactoryArtifact, null, 2)
  );
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {

  console.error(error);
  process.exitCode = 1;
});

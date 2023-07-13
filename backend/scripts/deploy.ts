import { ethers } from "hardhat";
import path from "path"
import { artifacts } from "hardhat";



async function main() {
  const signers = await ethers.getSigners();
  const [deployer] = signers
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());


  const AccountFactory = await ethers.getContractFactory("AccountFactory");
  const accountFactory = await AccountFactory.deploy();

  const dummyAccounts = signers.slice(-5)
  let i = 0;
  for(let acc of dummyAccounts){
    const name = `Account${i++}`
    const age = Math.floor(18+ Math.random()*10)
    const location = 19
    const gender = Math.random()<0.6?1:0
    const interest = gender==1?0:1
    const bio = `${age} yo ${gender==0?"guy":"girl"} here, looking for hot ${interest==0?"guys":"girls"}!`

    await accountFactory.connect(acc).createAccount(name, gender, age, interest, bio, location)
  }

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
  const contractsDir = path.join(__dirname, "..", "..", "frontend", "src","contracts");

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

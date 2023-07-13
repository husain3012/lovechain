import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import { DummyUsers , getExpectedMatches} from "./TestData";

describe("AccountFactory", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  
  async function deployEmptyAccountFactory() {
   

  
    // Contracts are deployed using the first signer/account by default
    const usersAddresses = await ethers.getSigners();

    const AccountFactory = await ethers.getContractFactory("AccountFactory");
    const accountFactory = await AccountFactory.deploy();

    let i =0;

    const users = DummyUsers.map(u=>{
      return ({
        ...u, userAddress : usersAddresses[i++]
      })
    })



    return { accountFactory , users};
  }

  describe("Deployment", function () {
    it("Should deploy accounts factory", async function () {
      const { accountFactory } = await loadFixture(deployEmptyAccountFactory);

      expect(await accountFactory.numberOfAccounts()).to.equal(0);
    });

  })
  describe("Functions", function () {

    it("should add accounts using create account", async function () {
      const { accountFactory, users } = await loadFixture(deployEmptyAccountFactory);
      for (let user of users){
      
        await accountFactory.connect(user.userAddress).createAccount(user.name, user.genderID, user.age, user.interestID, user.bio, user.locationID)
      }
      expect(await accountFactory.numberOfAccounts()).to.equal(users.length);
    });

    it("should get self account reference ", async function () {
      const { accountFactory, users } = await loadFixture(deployEmptyAccountFactory);
      const [user1,user2] = users;

      await accountFactory.connect(user1.userAddress).createAccount(user1.name, user1.genderID, user1.age, user1.interestID, user1.bio, user1.locationID)
      await accountFactory.connect(user2.userAddress).createAccount(user2.name, user2.genderID, user2.age, user2.interestID, user2.bio, user2.locationID)


      const selfAccount1 = await accountFactory.connect(user1.userAddress).getSelfAccount();
      const selfAccount2 = await accountFactory.connect(user2.userAddress).getSelfAccount();




      expect(selfAccount2.user_id).equal(user2.userAddress.address);
      expect(selfAccount2.locationID).equal(user2.locationID);
      expect(selfAccount2.genderID).equal(user2.genderID);
      expect(selfAccount2.interestID).equal(user2.interestID);

      expect(selfAccount1.user_id).equal(user1.userAddress.address);
      expect(selfAccount1.locationID).equal(user1.locationID);
      expect(selfAccount1.genderID).equal(user1.genderID);
      expect(selfAccount1.interestID).equal(user1.interestID);

      
    });

    it("should not return any match ", async function () {
      const { accountFactory, users } = await loadFixture(deployEmptyAccountFactory);
      const [user1, _, user2] = users;
      await accountFactory.connect(user1.userAddress).createAccount(user1.name, user1.genderID, user1.age, user1.interestID, user1.bio, user1.locationID)
      await accountFactory.connect(user2.userAddress).createAccount(user2.name, user2.genderID, user2.age, user2.interestID, user2.bio, user2.locationID)

      const matches = await accountFactory.connect(user1.userAddress).getMatchingAccounts();
      const filteredMatches = matches.filter(m=>m!='0x0000000000000000000000000000000000000000')
      expect(filteredMatches.length).equal(0);

    });

    
    it("should  return  potential matches for a straight guy ", async function () {
      const { accountFactory, users } = await loadFixture(deployEmptyAccountFactory);
      const [user1, user2] = users;

      for (let user of users){
      
        await accountFactory.connect(user.userAddress).createAccount(user.name, user.genderID, user.age, user.interestID, user.bio, user.locationID)
      }


      expect(await accountFactory.numberOfAccounts()).to.equal(users.length);


      const matches = await accountFactory.connect(user1.userAddress).getMatchingAccounts();
      const filteredMatches = matches.filter(m=>m!='0x0000000000000000000000000000000000000000')

      const expectedMatches = getExpectedMatches(0)
      expect(filteredMatches.length).equal(expectedMatches.length);


    
      const matchingUserRef= await ethers.getContractAt('Account', filteredMatches[0]);
      const matchingUser = await matchingUserRef.getSelfInfo()
      expect(matchingUser.name).equal(expectedMatches[0].name);

    });


    it("should  return potential matches for a straight girl ", async function () {
      const { accountFactory, users } = await loadFixture(deployEmptyAccountFactory);
      const girl = users[1];

      for (let user of users){
        await accountFactory.connect(user.userAddress).createAccount(user.name, user.genderID, user.age, user.interestID, user.bio, user.locationID)
      }
      const matches = await accountFactory.connect(girl.userAddress).getMatchingAccounts();
      const filteredMatches = matches.filter(m=>m!='0x0000000000000000000000000000000000000000')

      const expectedMatches = getExpectedMatches(1)

      expect(filteredMatches.length).equal(expectedMatches.length);

      const matchingUserRef= await ethers.getContractAt('Account', filteredMatches[0]);
      const matchingUser = await matchingUserRef.getSelfInfo()
      expect(matchingUser.name).equal(expectedMatches[0].name);

    });
  });

});

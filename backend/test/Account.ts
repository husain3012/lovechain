import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DummyUsers } from "./TestData";

describe("Account", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

 const name = DummyUsers[0].name
 const genderID = DummyUsers[0].genderID
 const age = DummyUsers[0].age
 const interestID = DummyUsers[0].interestID
 const bio = DummyUsers[0].bio
 const locationID = DummyUsers[0].locationID


  
  async function deployAccountFactoryWithAccounts() {
   

  
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

    for (let user of users){
      
      await accountFactory.connect(user.userAddress).createAccount(user.name, user.genderID, user.age, user.interestID, user.bio, user.locationID)
      

    }
    const selfAccountRef1 = await accountFactory.connect(users[0].userAddress).getSelfAccount();

    const selfAccount1 = await ethers.getContractAt('Account', selfAccountRef1.account);

    const selfAccountRef2 = await accountFactory.connect(users[1].userAddress).getSelfAccount();
    const selfAccount2 = await ethers.getContractAt('Account', selfAccountRef2.account);
    return { accountFactory , users,  selfAccount1, selfAccount2};
  }

  describe("Initialization", function () {

    
    it("Should get self account for user1", async function () {
      const { selfAccount1, users} = await loadFixture(deployAccountFactoryWithAccounts);
      const accountInfo =  await selfAccount1.getSelfInfo();


      expect( accountInfo.user_id).equal(users[0].userAddress.address);
      expect( accountInfo.name).equal(name);
      expect( accountInfo.genderID).equal(genderID);
      expect( accountInfo.interestID).equal(interestID);
      expect( accountInfo.age).equal(age);
      expect( accountInfo.bio).equal(bio);
      expect( accountInfo.locationID).equal(locationID);
    });
    
    it("Should get self account for user2", async function () {
      const { selfAccount2, users} = await loadFixture(deployAccountFactoryWithAccounts);
      const accountInfo =  await selfAccount2.getSelfInfo();

      expect( accountInfo.user_id).equal(users[1].userAddress.address);
      expect( accountInfo.name).equal(users[1].name);
      expect( accountInfo.genderID).equal(users[1].genderID);
      expect( accountInfo.interestID).equal(users[1].interestID);
      expect( accountInfo.age).equal(users[1].age);
      expect( accountInfo.bio).equal(users[1].bio);
      expect( accountInfo.locationID).equal(users[1].locationID);
    });




  });

  describe("Likes And Matches", function () {

    // it("Should be able to like a user", async function () {
    //   const { selfAccount1, accountFactory, users} = await loadFixture(deployAccountFactoryWithAccounts);
    //   const accountInfo =  await selfAccount1.getSelfInfo();

    //   const potentialMatches = await accountFactory.connect(users[0].userAddress).getMatchingAccounts();
    //   const filteredMatches = potentialMatches.filter(m=>m!='0x0000000000000000000000000000000000000000');
      
    //   const [first_match] = filteredMatches;


    //   await selfAccount1.likeUser(first_match);

    //   const likes = await selfAccount1.getUserLikes();
    //   expect(likes.length).equal(1);
    //   expect(likes[0]).equal(potentialMatches[0]);

    // });

    it("Should get a match", async function () {
      const { selfAccount2, selfAccount1, accountFactory, users} = await loadFixture(deployAccountFactoryWithAccounts);
    

      // u1 like u2
      const potentialMatches1 = await accountFactory.connect(users[0].userAddress).getMatchingAccounts();
      const filteredMatches1 = potentialMatches1.filter(m=>m!='0x0000000000000000000000000000000000000000');
      await selfAccount1.likeUser(filteredMatches1[0]);
      const likes1 = await selfAccount1.getUserLikes();

      // ---------------

      // u2 like u1
      const potentialMatches2 = await accountFactory.connect(users[1].userAddress).getMatchingAccounts();
      const filteredMatches2 = potentialMatches2.filter(m=>m!='0x0000000000000000000000000000000000000000');
  
      await selfAccount2.likeUser(filteredMatches2[0]);
      const likes2 = await selfAccount2.getUserLikes();


      // ----------------

      // get matches
      const match1 = await selfAccount1.getUserMatches();
      const match2 = await selfAccount2.getUserMatches();

 


      expect(likes1.length).equal(1);
      expect(likes2.length).equal(1);
      expect(likes1[0]).equal(potentialMatches1[0]);
      expect(likes2[0]).equal(potentialMatches2[0]);
      expect(match1.length).equal(1);
      expect(match2.length).equal(1);
      expect(match1[0]).equal(selfAccount2.address);
      expect(match2[0]).equal(selfAccount1.address);

    });







    


    
 


  });

  

});

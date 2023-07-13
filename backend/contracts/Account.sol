// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// import "hardhat/console.sol";

 struct AccountInfo {
    address user_id;
    string name;
    uint8 genderID;
    uint8 interestID;
    uint256 age;
    string bio;
    uint256 locationID;
  }

contract Account {
 

  struct AddressSet {
    address[] values;
    mapping(address => bool) has;
  }

  AccountInfo account;

  AddressSet likes;
  AddressSet matches;
  AddressSet swipes;

  constructor(
    address u_id,
    string memory u_name,
    uint8 u_genderID,
    uint256 u_age,
    uint8 u_interestID,
    string memory u_bio,
    uint256 u_locationID
  ) {
    account.user_id = u_id;
    account.name = u_name;
    account.age = u_age;
    account.bio = u_bio;
    account.locationID = u_locationID;
    account.genderID = u_genderID;
    account.interestID = u_interestID;
  }

  function getSelfInfo() public view returns (AccountInfo memory) {
    return account;
  }

  function getUserMatches() public view returns (address[] memory) {
    return matches.values;
  }

  function getUserLikes() public view returns (address[] memory) {
    return likes.values;
  }

  function likeUser(address likedUserAccountAddrs) public {
    require(!likes.has[likedUserAccountAddrs], "User already liked");
    
    likes.values.push(likedUserAccountAddrs);

    likes.has[likedUserAccountAddrs]=true;
    bool isMatch = Account(likedUserAccountAddrs).isInLikes(address(this));
    
    if(isMatch){
        addMatch(likedUserAccountAddrs);
        Account(likedUserAccountAddrs).addMatch(address(this));
    }
  }

  function isInLikes(address userAddress) public view returns (bool){
    return likes.has[userAddress];
  }

  function addMatch(address userAddress) public {
     matches.values.push(userAddress);
     matches.has[userAddress]=true;
  }
}

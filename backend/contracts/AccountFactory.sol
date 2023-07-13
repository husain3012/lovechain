// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./Account.sol";

function strcmp(string memory a, string memory b) pure returns (bool) {
    return (keccak256(abi.encodePacked((a))) ==
        keccak256(abi.encodePacked((b))));
}

// Gender ID:
// 0 male
// 1 female

// Interest ID:
// 0 male
// 1 female
// 2 all

contract AccountFactory {
    struct AccountWithLocation {
        address user_id;
        address account;
        uint256 locationID;
        uint256 genderID;
        uint256 interestID;
        uint256 exploredTill;
    }
    mapping(address => bool) accountExsist;

    AccountWithLocation[]  accountsWithLocationIDs;
    mapping(address => uint256) accountMap;
    function numberOfAccounts () public view returns (uint256){
        return accountsWithLocationIDs.length;
    }

    function createAccount(
        string memory u_name,
        uint8 u_genderID,
        uint256 u_age,
        uint8 u_interestID,
        string memory u_bio,
        uint256 u_locationID
    ) public {
        address newAccount = address(
            new Account(
                msg.sender,
                u_name,
                u_genderID,
                u_age,
                u_interestID,
                u_bio,
                u_locationID
            )
        );
        uint256 idx = accountsWithLocationIDs.length;
        AccountWithLocation
            storage newAccountWithLocationID = accountsWithLocationIDs.push();
        newAccountWithLocationID.user_id = msg.sender;
        newAccountWithLocationID.account = newAccount;
        newAccountWithLocationID.locationID = u_locationID;
        newAccountWithLocationID.genderID = u_genderID;
        newAccountWithLocationID.interestID = u_interestID;
        newAccountWithLocationID.exploredTill = 0;
        accountMap[msg.sender] = idx;
        accountExsist[msg.sender] = true;
    }

    function getSelfAccount() public view returns (AccountWithLocation memory){
        require(accountExsist[msg.sender]==true, "User does not exist!");


        return accountsWithLocationIDs[accountMap[msg.sender]];

    }

    function getAccountByAddress(address addr) public view returns (AccountInfo memory){

        return Account(addr).getSelfInfo();
        
    }



    function getPotentailMatches() public view returns (address[] memory) {
        uint256 locationID = accountsWithLocationIDs[accountMap[msg.sender]].locationID;
        uint256  interestID = accountsWithLocationIDs[accountMap[msg.sender]].interestID;
        uint256  genderID = accountsWithLocationIDs[accountMap[msg.sender]].genderID;
        uint256  exploredTill = accountsWithLocationIDs[accountMap[msg.sender]].exploredTill;
        uint256  exploreUntil = (exploredTill+10)<accountsWithLocationIDs.length?(exploredTill+10):accountsWithLocationIDs.length-1;
        
        address[] memory matchedAccounts=new address[](10);
        uint256 count = 0;

        for (uint256 i = exploredTill; i <= exploreUntil; i++) {
        // console.log(msg.sender, " X ", accountsWithLocationIDs[i].user_id);

            if (accountsWithLocationIDs[i].locationID == locationID && accountsWithLocationIDs[i].user_id!=msg.sender ) {
                if (
                    (interestID == 2 &&  
                    (accountsWithLocationIDs[i].interestID==2 || accountsWithLocationIDs[i].interestID == genderID)) || (accountsWithLocationIDs[i].genderID==interestID && accountsWithLocationIDs[i].interestID==genderID)
                ) {
                    matchedAccounts[count] = accountsWithLocationIDs[i].account;
                    count++;
                }
            }
        }
        return matchedAccounts;
    }

 
    function updateExploredTill() public {
        accountsWithLocationIDs[accountMap[msg.sender]].exploredTill++;
    }
    
}


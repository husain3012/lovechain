import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";
import AccountFactoryAbi from "../contracts/AccountFactory.json";
import AccountAbi from "../contracts/contracts/Account.sol/Account.json";
import { AccountFactory, Account } from "../typechain-types";

import { IUserInfo } from "../types"


export const createUserAccountIfNotExist = async (accountFactory: AccountFactory, userInfo: IUserInfo,) => {
    const { name, genderID, age, interestID, bio, locationID } = userInfo;
    await accountFactory.createAccount(name, genderID, age, interestID, bio, locationID);
  
   
}

export const getSelfAccountInstance = async (accountFactory: AccountFactory, ethereum) => {


    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();



    try {
        const selfAccount = await accountFactory.getSelfAccount();
        

        const deployedUserAccountInstance = new ethers.Contract(
            selfAccount.account,
            AccountAbi.abi,
            signer
        ) as unknown as Account;

        return { success: true, data: deployedUserAccountInstance }
    } catch (error) {
        console.log(error)

        return { success: false, data: null };
    }

}


export  const getPotentialMatches = async (accountFactory: AccountFactory) => {
    const accounts = await accountFactory.getMatchingAccounts()
    const filteredAccounts = accounts.filter(acc=>acc!='0x0000000000000000000000000000000000000000')
    return filteredAccounts
    
}


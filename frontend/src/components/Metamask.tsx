import { useMetaMask } from "metamask-react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";
import AccountFactoryAbi from "../contracts/AccountFactory.json";
import AccountAbi from "../contracts/contracts/Account.sol/Account.json";
import { AccountFactory, Account } from "../typechain-types";
import React, { useEffect, useState } from "react";

import { IUserInfo } from "../types";
import { useRecoilState } from "recoil";
import { accountFactoryCtx } from "../context/accountFactory";
import { userAccountCtx } from "../context/userAccount";
import { getSelfAccountInstance } from "../utils/account-functions";

const Metamask = ({ children }: { children: React.ReactNode }) => {
  const { status, connect, account, ethereum } = useMetaMask();

  const [accountFactory, setAccountFactory] = useState<null | AccountFactory>(
    null
  );

  useEffect(() => {
    const getAccountFactory = async () => {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      console.log("🚀 ~ file: Metamask.tsx:27 ~ getAccountFactory ~ signer:", signer)
      const transactionContract = new ethers.Contract(
        contractAddress.AccountFactory,
        AccountFactoryAbi.abi,
        signer
      ) as unknown as AccountFactory;
      console.log(
        "🚀 ~ file: useWeb3.ts:28 ~ getAccountFactory ~ transactionContract:",
        transactionContract
      );

      setAccountFactory(transactionContract);
    };
    if (status != "connected") return;
    getAccountFactory();
  }, [account, ethereum, setAccountFactory, status]);

  useEffect(() => {
    if (accountFactory === null) return;
    getSelfAccountInstance(accountFactory, ethereum).then((acc) => {
     
      // console.log("🚀 ~ file: Metamask.tsx:46 ~ getSelfAccountInstance ~ acc:", acc)
    });
  }, [account, accountFactory, ethereum]);

  return (
    <accountFactoryCtx.Provider value={accountFactory}>
      {status != "connected" ? (
        <dialog id="my_modal_1" className="modal modal-open">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">MetaMask needed!</h3>
            <p className="py-4">
              Click the button bellow to connect to metamask!
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary" onClick={connect}>Connect To Metamask</button>
            </div>
          </form>
        </dialog>
      ) : (
        children
      )}
    </accountFactoryCtx.Provider>
  );
};

export default Metamask;

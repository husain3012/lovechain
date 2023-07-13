import React, { FormEvent, useContext, useEffect, useState } from "react";
import {
  createUserAccountIfNotExist,
  getSelfAccountInstance,
} from "../utils/account-functions";
import { accountFactoryCtx } from "../context/accountFactory";
import { Account } from "../typechain-types";
import { useMetaMask } from "metamask-react";
import { userAccountCtx } from "../context/userAccount";
import { LOCATION } from "../constants/enums";
const UserAccount = ({ children }: { children?: React.ReactNode }) => {
  const accountFactory = useContext(accountFactoryCtx);
  const [userAccount, setUserAccount] = useState<null | Account>(null);
  const [triggerReload, setTriggerReload] = useState(false)
  const { ethereum, account } = useMetaMask();

  useEffect(() => {
    if (accountFactory === null) return;
    getSelfAccountInstance(accountFactory, ethereum).then((acc) => {
      if (!acc.success) {
        setUserAccount(null);

        return;
      }
      setUserAccount(acc.data);
    });
  }, [account, accountFactory, ethereum, triggerReload]);

  const [name, setName] = useState("");
  const [genderID, setGenderID] = useState(0);
  const [locationID, setLocationID] = useState(0);
  const [age, setAge] = useState(0);
  const [interestID, setInterestID] = useState(1);
  const [bio, setBio] = useState("");

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await createUserAccountIfNotExist(
      accountFactory,
      {
        name,
        age,
        genderID,
        bio,
        interestID,
        locationID,
      },
    ).then(()=>setTriggerReload(p=>!p))
    
 
  };

  return (
    <userAccountCtx.Provider value={userAccount}>
      {userAccount == null ? (
        <div className="modal modal-open ">
          <form className="bg-base-300 p-2" onSubmit={formSubmitHandler}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                onChange={(v) => setName(v.target.value)}
                value={name}
                placeholder="Buzzigna BoobMaster"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Pick your gender</span>
              </label>
              <select
                value={genderID}
                onChange={(v) => setGenderID(parseInt(v.target.value))}
                className="select w-full max-w-xs"
              >
                <option value={0}>I have penis</option>
                <option value={1}>I have vagina</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Who are you seeking?</span>
              </label>
              <select
                value={interestID}
                onChange={(v) => setInterestID(parseInt(v.target.value))}
                className="select w-full max-w-xs"
              >
                <option value={0}>Peeps with penis</option>
                <option value={1}>Peeps with vagina</option>
                <option value={2}>All Peeps 🌈</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">How old are ya?!</span>
              </label>
              <input
                type="number"
                onChange={(v) => setAge(parseInt(v.target.value))}
                value={age}
                placeholder="68"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Where your from?</span>
              </label>
              <select
                value={locationID}
                onChange={(v) => setLocationID(parseInt(v.target.value))}
                className="select w-full max-w-xs"
              >
                {LOCATION.map((loc, idx) => (
                  <option key={loc} value={idx}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">A bit about yourself...</span>
              </label>
              <textarea
                onChange={(v) => setBio(v.target.value)}
                value={bio}
                className="textarea textarea-bordered h-24"
                placeholder="I like dancing like hippies..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Sign Up!
            </button>
          </form>
        </div>
      ) : (
        children
      )}
    </userAccountCtx.Provider>
  );
};

export default UserAccount;

import React, { useEffect, useState } from 'react'
import { toSvg } from "jdenticon";

import { useContext } from 'react';
import { userAccountCtx } from '../../context/userAccount';

import { Account } from "../../typechain-types";
import { AccountInfoStructOutput } from '../../typechain-types/Account';
import { accountFactoryCtx } from '../../context/accountFactory';

import parse from 'html-react-parser';





const ProfileCard = ({address}) => {
    const accountFactory = useContext(accountFactoryCtx)
    const userAccount = useContext(userAccountCtx)
    const [userData, setUserData]  = useState<null|AccountInfoStructOutput>(null)
    useEffect(()=>{

        const getSelfInfo = async ()=>{

           const user =  await accountFactory.getAccountByAddress(address)
            setUserData(user)
        }

        getSelfInfo();


    },[accountFactory, address])

    const handleLike = async () => {
      await userAccount.likeUser(address)
      await updatedExplored()
      
    }

    const updatedExplored = async () => {
      await accountFactory.updateExploredTill()
    }

  return ( userData?
<div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">

  {parse(toSvg(userData.user_id, 100))}
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{userData.name}</h2>
    <p>{userData.bio}</p>
    <div className="card-actions">
      <button onClick={updatedExplored} className="btn btn-outline btn-error">NAY</button>
      <button onClick={handleLike} className="btn  btn-success">YAY!</button>
    </div>
  </div>
</div>:<div></div>

  )
}

export default ProfileCard
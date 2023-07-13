import React, { useEffect, useState } from 'react'
import { useMetaMask } from 'metamask-react'
import { accountFactoryCtx } from '../../context/accountFactory'
import { useContext } from 'react'

import { getPotentialMatches } from '../../utils/account-functions'
import ProfileCard from './ProfileCard'
const MatchingAccounts = () => {
  const accountFactory = useContext(accountFactoryCtx);
  const [potentialMatches, setPotentialMatches] = useState([])
  useEffect(()=>{
    getPotentialMatches
    const asyncFunc = async () => {
      const potentialMatches = await getPotentialMatches(accountFactory);
      console.log(potentialMatches)
      setPotentialMatches(potentialMatches)
    }
    asyncFunc()

  }, [accountFactory])
    
  return (
    <div><h1 className='text-2xl'>Users you might like!
      </h1>
      {
       potentialMatches.length>0 ? <ProfileCard address={potentialMatches[0]}/>:"Nothing found"
      }
      
      </div>
  )
}

export default MatchingAccounts
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

  const handleProcessedMatch = (address) =>{
    setPotentialMatches(matches=>matches.filter(add=>add!=address))
  }
    
  return (
    <div className='w-max mx-auto'>
      <h1 className='text-4xl m-2'>Users you might like!
      </h1>
      <div className='stack w-max mx-auto my-8 '>
        

        

      {
        potentialMatches.length>0 ? potentialMatches.map(match=><div className="text-center border border-base-content card  bg-base-100">
        <div className="card-body"><ProfileCard address={match}  onMatchProcesses={handleProcessedMatch} /></div>
      </div> ):"Nothing found"
      }
      </div>
      
      </div>
  )
}

export default MatchingAccounts
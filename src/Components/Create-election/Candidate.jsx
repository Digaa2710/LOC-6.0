import React from 'react'
import CandidateItem from './CandidateItem'


export default function Candidate() {
    let add=()=>{
        return <CandidateItem addCandidate={add}/>
    }
  return (
    <div>
        <button className='bg-[#5626a8]'>ADD CANDIDATE</button>
        
    </div>
  )
}

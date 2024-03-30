import React from 'react'
import AddCandidate from './AddCandidate'
import Election from './Election'

export default function CreateElection() {
  return (
    <div className='h-[100vh]  bg-[#160226] flex flex-col justify-center'>
        <AddCandidate/>
        <Election/>
    </div>
  )
}

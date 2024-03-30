import React, { useState } from 'react'
import SideSection from '../Components/UserVoting/SideSection'
import MainSection from '../Components/UserVoting/MainSection'

export default function UserVoting() {
  let [step,setStep]=useState(0)
  return (
    <div className='flex flex-col px-16 pt-16'>
        <p className='text-white text-2xl'>THREE STEP VOTING</p>
        <hr className='my-3 border-[#3f3f3f]'/>
        <div className="flex">
          <SideSection step={step} setStep={setStep}/>
          <MainSection step={step} setStep={setStep}/>
        </div>
    </div>
  )
}

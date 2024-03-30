import React, { useState } from 'react'
import ElectionId from './ElectionId'
import VoterId from './VoterId'
import Vote from './CardsAnim/Vote'

export default function MainSection(props) {
    
  return (
    <div className='w-[80vw] h-[80vh] p-10'>
        {props.step===0 && <ElectionId step={props.step} setStep={props.setStep}/>}
        {props.step===1 && <VoterId step={props.step} setStep={props.setStep}/>}
        {props.step===2 && <Vote step={props.step} setStep={props.setStep}/>}
    </div>
  )
}

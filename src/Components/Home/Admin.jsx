import React from 'react'
import Card from './Card'
import screenshot1 from '../../assets/electionId.png'
import {motion} from 'framer-motion'

export default function Admin() {
  return (
    <div className='flex flex-col items-center gap-7'>
        <p className='text-white text-xl'>ADMIN SECTION</p>
        <div className="bg-[#1b1228] flex justify-between">
            <Card image={screenshot1} number={1} title={`ELECTION ID`} desc={'lorem25'}/>
            <Card image={screenshot1} number={2} title={`VOTER ID`} desc={'lorem25'}/>
            <Card image={screenshot1} number={3} title={`VOTE`} desc={'lorem25'}/>
        </div>
    </div>
  )
}

import React from 'react'
import Card from './Card'
import screenshot1 from '../../assets/electionId.png'
import screenshot2 from '../../assets/VoterId.png'
import screenshot3 from '../../assets/vote.png'
import {motion} from 'framer-motion'

export default function User() {
  return (
    <motion.div  className='flex flex-col items-center gap-7' initial={{opacity:0,x:-2500}} animate={{opacity:1,x:0}} transition={{duration:2,delay:0.5}} >
        <p className='text-white text-xl'>USER SECTION</p>
        <div className="bg-[#140822] flex justify-between"  >
            <Card image={screenshot1} number={1} title={`ELECTION ID`} desc={'lorem25'}/>
            <Card image={screenshot2} number={2} title={`VOTER ID`} desc={'lorem25'}/>
            <Card image={screenshot3} number={3} title={`VOTE`} desc={'lorem25'}/>
        </div>
    </motion.div>
  )
}

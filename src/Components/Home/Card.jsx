import React from 'react'
import {easeIn, motion} from 'framer-motion'

export default function Card(props) {
  return (
      <motion.div className="w-1/3 flex flex-col items-start gap-5 border border-[#2f1a43] p-16" initial={{opacity:0,translateX:2000}} animate={{opacity:1,translateX:0}} transition={{duration:2,delay:0.5 ,ease:easeIn} }>
          <div className="flex flex-col justify-start gap-5">
            <div className="w-[5px] h-[5px] bg-gradient-to-b from-[#7515e3] to-[#2b70f8] p-3 flex justify-center items-center text-white rounded-md">{props.number}</div>
            <p className='text-white'>{props.title}</p>
          </div>
          <p className='text-gray-400'>{props.desc}</p>
          <img src={props.image} alt="" className='min-w-96'/>
      </motion.div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Animation from '../../Components/Home/Animation/Animation'
import {motion} from 'framer-motion'
export default function Landing() {
  return (
    <div>
        <div className="glow w-[200px] h-[150px] md:w-[300px] md:h-[200px] rounded-full bg-[#6c49ed] absolute -top-16 -left-24 -z-10 blur-3xl"></div>
        <motion.div className="flex items-center justify-around" >
            <motion.div className="text p-7 md:p-36 flex flex-col gap-8" initial={{opacity:0}} animate={{opacity:1,translateX:0,translateY:50}} transition={{translateX:0,translateY:0,duration:1,delay:0.5}} >
                <p className='text-white text-2xl md:text-8xl font-medium'>EMPOWERING VOICES</p>
                <p className='text-white text-md md:text-4xl'>EVERY ELECTION, <span className='text-[#5f49ed]'>EVERY VOTE</span></p>
                <p className='text-[#50506e] text-xs md:text-lg md:w-[40vw] my-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde reprehenderit, quas vel veritatis architecto fugiat nostrum optio! Impedit voluptates molestias exercitationem beatae</p>
                <div className=" flex gap-6">
                    <button className='bg-gradient-to-tr from-[#7515e3] to-[#2b70f8] px-7 py-1 rounded-xl text-white'><Link to='/vote'>VOTE NOW</Link></button>
                    <Link to='/election'><button className='bg-transparent border border-[#7515e3] px-7 py-1 rounded-xl text-white'>CREATE AN ELECTION</button></Link>
                    <Link to='/results'><button className='bg-transparent border border-[#7515e3] px-7 py-1 rounded-xl text-white'>CHECK RESULTS</button></Link>
                </div>
            </motion.div>

            <motion.div className="animation" initial={{opacity:0}} animate={{opacity:1,translateX:-50,translateY:0}} transition={{duration:1,delay:1.5}}>
              <Animation/>
            </motion.div>
        </motion.div>
        
    </div>
  )
}

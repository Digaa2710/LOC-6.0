import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Navbar() {
  let [menu,setMenu]=useState(false)
  return (
    <motion.header className='bg-transparent w-[100vw] flex flex-col md:flex-row items-center p-5 md:p-7 md:px-20 gap-5 md:justify-between shadow-xl' initial={{y:-100}} animate={{y:0}} transition={{duration:0.4}}>
          {/* LOGO+ open close menu icon */}
          <div className="flex items-center justify-between w-[90vw] md:w-[30vw]">
              <div className="text-[#ffffff] md:text-xl lg:text-2xl font-normal">ElectSmart</div>
              <div className="icons md:hidden">
                <i className={menu?"hidden":'bx bx-menu-alt-right text-white text-xl'} onClick={()=>{setMenu(!menu)}} />
                <i className={menu?'bx bxl-xing text-white text-xl':"hidden"} onClick={()=>{setMenu(!menu)}} />
              </div>
          </div>

          {/* navigation links */}
          <div className={menu?"":"hidden md:inline"}>
              <ul className='flex flex-col md:flex-row items-center gap-3 md:gap-4 lg:gap-16'>
                  <Link to='/'><li className='text-white font-normal cursor-pointer md:text-base lg:text-lg hover:text-purple-400 transition'>HOME</li></Link>
                  <Link to='/vote'><li className='text-white font-normal cursor-pointer md:text-base lg:text-lg hover:text-purple-400 transition'>VOTE NOW</li></Link>
                  <Link to='/election'><li className='text-white font-normal cursor-pointer bg-gradient-to-tr from-[#7515e3] to-[#2b70f8] rounded-lg md:text-base lg:text-lg px-3 md:px-11 flex justify-center hover:bg-transparent  transition'>CREATE ELECTION</li></Link>
              </ul>
          </div>
    </motion.header>
  )
}

import React from 'react'
import Landing from '../Components/Home/Landing'
import User from '../Components/Home/User'
import Admin from '../Components/Home/Admin'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col gap-11'>
      <Navbar/>
        <Landing/>
        <User/>
        <Admin/>
        <Footer/>
    </div>
  )
}

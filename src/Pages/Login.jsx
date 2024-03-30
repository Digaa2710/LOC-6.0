import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {

  const[formData,setFormData]=useState({})
  const[Loading,SetLoading]=useState(false)
  const[DispError,SetDispError]=useState(null)
  const[SuccessMessage,SetSuccessMessage]=useState(false)
  const navigate=useNavigate()


  const handleChange=(e)=>{
      setFormData({
          ...formData,
          [e.target.id]:e.target.value
      })
  }

  return (
    <div className='w-[85vw] lg:w-[50vw] xl:w-[30vw] container mx-auto my-20 lg:my-40'>
        {/* <img src={carImg} alt="" className='w-[85vw] lg:w-[50vw] xl:w-[30vw] rounded-lg'/> */}
        <form className='flex flex-col'>
            
            <input type="text" placeholder='ENTER USERNAME' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10'/>
            <input type="password" name="" id="" placeholder='ENTER PASSWORD' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10'/>
            
            <button className='bg-[#9F8E7D] hover:bg-[#b4a290] my-2 md:my-3 py-4 rounded-lg text-black placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>CREATE ACCOUNT</button>
            <button className='bg-[#845D42] hover:bg-[#9b6f50] my-2 md:my-3 py-4 rounded-lg text-white placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>SIGN UP WITH GOOGLE</button>
            <div className="flex justify-between my-2 md:my-3">
              <p className='text-white text-sm md:text-lg'>Dont Have an Account? </p>
              <p className='text-[#C79D76] hover:text-[#dcba99] cursor-pointer text-sm md:text-lg'><Link to='/sign-up' className='cursor-pointer'>CREATE AN ACCOUNT</Link></p>
            </div>
        </form>
    </div>
  )
}

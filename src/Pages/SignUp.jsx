import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

  const[formData,setFormData]=useState({})
  const[Loading,SetLoading]=useState(false)
  const[DispError,SetDispError]=useState(null)
  const[SuccessMessage,SetSuccessMessage]=useState(false)
  const navigate=useNavigate()


  console.log(formData)
  console.log(DispError)

  const handleChange = (e) => {
    setFormData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
    }));
  };

  const handleSubmit=async(e)=>{

    e.preventDefault()
    SetLoading(true) //

    try {
          const res=await fetch('https://bfd6-2409-4080-d15-636c-dd1-a185-fae0-6ef1.ngrok-free.app/api/users/signup/',
          {
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(formData)
          }
        )
        const data=await res.json()

        if(data.success===false)
        {
          SetLoading(false)
          SetDispError(data.message)
          SetSuccessMessage(false)
          return;
        } //

        SetLoading(false) //
        SetDispError(null)
        SetSuccessMessage(true)
        navigate('/sign-in')

    } catch (error) {
        SetLoading(false)
        SetSuccessMessage(false)
        SetDispError(error.message)
    }
}





  return (
    <div className='w-[85vw] lg:w-[50vw] xl:w-[30vw] container mx-auto my-20 lg:my-40'>
        {/* <img src={carImg} alt="" className='w-[85vw] lg:w-[50vw] xl:w-[30vw] rounded-lg'/> */}
        <form className='flex flex-col' onSubmit={handleSubmit}>
            
            <input type="text" placeholder='ENTER USERNAME' name="username" id="username" className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChange}/>
            <input type="password" placeholder='ENTER PASSWORD' name="password" id="password" className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChange}/>
            
            
            <button className='bg-[#9F8E7D] hover:bg-[#b4a290] my-2 md:my-3 py-4 rounded-lg text-black placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>CREATE ACCOUNT</button>
            {/* <button className='bg-[#845D42] hover:bg-[#9b6f50] my-2 md:my-3 py-4 rounded-lg text-white placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>SIGN UP WITH GOOGLE</button> */}
            {/* <div className="flex justify-between my-2 md:my-3">
              <p className='text-white text-sm md:text-lg'>Already Have an account?</p>
              <p className='text-[#C79D76] hover:text-[#dcba99] cursor-pointer text-sm md:text-lg'><Link to='/login' className='cursor-pointer'>SIGN IN</Link></p>
            </div> */}
        </form>
    </div>
  )
}

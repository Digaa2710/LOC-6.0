import React, { useState } from 'react'
import voting from '../../assets/undraw_voting_nvu7.svg'
import { useNavigate } from 'react-router-dom'

export default function VoterId(props) {
  let handleClick=()=>{
    props.setStep(2)
  }

  // const[formData,setFormData]=useState({})
  const[email,setEmail]=useState()
  const[otp,setOtp]=useState()
  console.log(otp);
  console.log(email);
  const[Loading,SetLoading]=useState(false)
  const[DispError,SetDispError]=useState(null)
  const[SuccessMessage,SetSuccessMessage]=useState(false)
  const navigate=useNavigate()


  console.log(DispError)

 let handleChange=(e)=>{
   setEmail(e.target.value)
 }

  const handleSubmitEmails = async() => {

    
    try {
      let res=await fetch('https://divij2510.pythonanywhere.com/verify-email/',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({email:email})
      })
      console.log(res,res.body);
      let data=await res.json()
      console.log(data)
    } catch (error) {
      console.log(error);                                 
    }
  };

  let handleOtpChange=(e)=>{
      setOtp(e.target.value)
  }

  const handleOtp = async() => {

    
    try {
      let res=await fetch('https://divij2510.pythonanywhere.com/verify-email/verify-otp/',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({
          email:email,
          otp:otp
        })
      })
      console.log(res,res.body);
      let data=await res.json()
      
    } catch (error) {
      console.log(error);                                 
    }
  };



  return (
    <div className='flex flex-col'>
        <div className="flex flex-col items-center gap-16">
            <div className="text flex flex-col items-center">
                <p className='text-white text-5xl' onChange={handleChange}>EMAIL</p>
            </div>
            <div className="flex flex-col items-center">
            <div className='flex flex-col items-center'>
              <input onChange={handleChange} type="text" id="voter_id" className='w-[30vw] bg-transparent border border-[#7b7295] outline-none rounded-md px-4 py-4 text-center placeholder:text-[#7b7295] text-[#7b7295] text-xl' placeholder='ENTER EMAIL ID'/>
              <button className='w-[30vw] translate-x-[00vw] text-[1.5em] rounded-lg py-2 text-white bg-gradient-to-r from-[#7515e3] to-[#2b70f8] m-3' onClick={handleSubmitEmails}>SUBMIT</button>
              <input onChange={handleOtpChange} type="password" id="password" className='w-[30vw] bg-transparent border border-[#7b7295] outline-none rounded-md px-4 py-4 text-center placeholder:text-[#7b7295] text-[#7b7295] text-xl m-6' placeholder='ENTER OTP'/>
              <button onClick={handleOtp} className='w-[30vw] text-[1.5em] rounded-lg py-2 text-white bg-gradient-to-r from-[#7515e3] to-[#2b70f8]'>Submit OTP</button>
            </div>
            </div>
        </div>
        <p className='text-white m-20 text-xl text-center'>Welcome to ElectSmart, operated by ElectSmart. These terms and conditions ("Terms") govern your use of the ElectSmart website and any services offered therein (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the Service. To use the Service, you must be at least 18 years old and have the legal capacity to enter into a contract. </p>
        {/* <img src={voting} alt="" className='w-[40vw] translate-y-28'/> */}
        <button onClick={handleClick} className='w-[30vw] translate-x-[20vw] text-[1.5em] rounded-lg py-2 text-white bg-gradient-to-r from-[#7515e3] to-[#2b70f8]'>Procced</button>
    </div>
  )
}

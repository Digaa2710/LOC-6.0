import React from 'react'

export default function CandidateItem(props) {
  return (
    <div className='p-5 flex flex-col items-center'>
        <form className='flex flex-col w-[500px]'>
            <input type="text" placeholder='Enter Entity name' className='bg-[#402284] rounded-lg px-3 py-2 focus:outline-none'/>
            <input type="file" className='text-white bg-purple'/>
            <button className='bg-gradient-to-r from-[#7515e3] to-[#2b70f8] rounded-lg px-3' onClick={()=>{props.addCandidate()}}>Add other</button>
        </form>
    </div>
  )
}

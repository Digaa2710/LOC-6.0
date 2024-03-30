import React from 'react'
import voting from '../../assets/undraw_voting_nvu7.svg'

export default function ElectionId(props) {
  let handleClick=()=>{
    props.setStep(1)
  }
  return (
    <div className='flex'>
        <div className="flex flex-col items-center gap-20 translate-y-32">
            <div className="text flex flex-col items-center">
                <p className='text-white text-5xl m-3'>ELECTION ID</p>
                <p className='text-gray-600 text-xl text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus libero est minus ab mollitia quos dicta cum possimus, reiciendis molestias voluptatum, dolorum alias odit, nam vel animi optio tenetur quae?</p>
            </div>
            <div className="flex flex-col items-center">
                <input type="text" className='w-[30vw] bg-transparent border border-[#7b7295] outline-none rounded-md px-4 py-4 text-center placeholder:text-[#7b7295] text-[#7b7295] text-xl' placeholder='ENTER ELECTION ID'/>
                <button onClick={handleClick} className='w-[200px] rounded-lg translate-y-12 py-1 text-white bg-gradient-to-r from-[#7515e3] to-[#2b70f8]'>PROCEED</button>
            </div>
        </div>
        <img src={voting} alt="" className='w-[35vw] translate-y-28'/>
    </div>
  )
}

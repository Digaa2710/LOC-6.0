import React from 'react'

export default function SideSection(props) {
  return (
    <div className='w-[15vw] h-[90vh] border-r-2 border-[#3f3f3f] p-14 flex items-center'>
        <div className="flex flex-col gap-44">
            <div className="flex items-center w-[300px] gap-14">
                <p className='text-white text-3xl'>ELECTION ID</p>
                <div className={`w-[10px] h-[10px] ${props.step===0?'bg-white':'bg-gray-600 '} rounded-full translate-x-1`}></div>
            </div>
            <div className="flex items-center w-[300px] gap-14">
                <p className='text-white text-3xl'>VOTER ID</p>
                <div className={`w-[10px] h-[10px] ${props.step===1?'bg-white':'bg-gray-600 '} rounded-full translate-x-12`}></div>
            </div>
            <div className="flex items-center w-[300px] gap-14">
                <p className='text-white text-3xl'>VOTE</p>
                <div className={`w-[10px] h-[10px] ${props.step===2?'bg-white':'bg-gray-600 '} rounded-full translate-x-[103px]`}></div>
            </div>
            
        </div>
    </div>
  )
}

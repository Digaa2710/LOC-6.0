import React from 'react'

export default function VoteCard(props) {

  let Vote=async()=>{
        let res=await fetch('https://divij2510.pythonanywhere.com/vote-candidate/',{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({name:props.text})
        })
        let data=res.json()
        console.log(data,res);
  }

  return (
    <div  className='flex items-center justify-between bg-gradient-to-r from-[#5f38d4] to-[#0041f2] w-[30vw] px-4 py-2 rounded-md'>
        <p>{props.text}</p>
        <button onClick={Vote} className='text-white'>VOTE</button>
    </div>
  )
}

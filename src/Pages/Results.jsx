import React, { useState } from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Line} from 'react-chartjs-2'
import {Link} from 'react-router-dom'

export default function Results() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: 'Election Results',
            data: [],
            backgroundColor: '#2c0f47', // Set background color
        }]
    });

    let [tableData,setTableData]=useState({})
    console.log(tableData);

    useState(()=>{
        let result=async()=>{
            let res=await fetch('https://divij2510.pythonanywhere.com/display-candidates/')
            let data=await res.json()

            const labels = data.map(candidate => candidate.name);
            const votes = data.map(candidate => candidate.vote_count);

            setChartData({
                labels: labels,
                datasets: [{
                    label: 'Votes',
                    data: votes,
                    backgroundColor: '#2c0f47', // Set background color
                }]
            });


        }
        let displayVotes=async()=>{

            let res=await fetch('https://divij2510.pythonanywhere.com/display-votes/')
            let data=await res.json()

            setTableData(data)
            

        }

        result()
        displayVotes()
    },[])

    

  return (
    <div className=''>
        <p className='text-white p-14'><Link to='/'>HOME</Link></p>
        <div className="w-[50vw] p-10 m-auto">
            <Bar className=''
                data={chartData}
            />
        </div>
        <div className="">
            <table className='border-spacing-3 w-full my-5'>
                <thead>
                    <tr className='bg-[#3e177d]'>
                        <td className='text-white text-left w-[12%] p-4'>BLOCK ID</td>
                        <td className='text-white text-left w-[12%]'>UNIQUE ID</td>
                        <td className='text-white text-left w-[12%]'>CANDIDATE WEB3 ID</td>
                        <td className='text-white text-left w-[12%]'>CANDIDATE NAME</td>
                        <td className='text-white text-left w-[12%]'>TIMESTAMP</td>
                    </tr>
                </thead>
                <tbody>
                    {tableData.length>0 && tableData.map((cand_data,index)=>{
                        return <tr key={index} className='bg-[#2c0f47]'>
                            <td className='text-white p-4'>{cand_data.block_id}</td>
                            <td className='text-white'>{cand_data.unique_id}</td>
                            <td className='text-white'>{cand_data.candidate.w3id}</td>
                            <td className='text-white'>{cand_data.candidate.name}</td>
                            <td className='text-white'>{cand_data.formatted_timestamp}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>


    </div>
  )
}

import { useNavigate } from "react-router-dom"
import VoteCard from "./VoteCard" 
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

export default function Vote() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getCandidates = async () => {
            try {
                const res = await fetch('https://divij2510.pythonanywhere.com/display-candidates/');
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };

        getCandidates();
    }, []);

    const proceed = () => {
        alert("You have voted successfully");
        navigate('/');
    };

    return (
        <div>
            <div className="flex flex-col items-center gap-9 bg-[#131134] w-[35vw] rounded-md p-7">
                {data.length > 0 && data.map((candidate, index) => (
                    <VoteCard key={index} text={candidate.name}/>
                ))}
            </div>
            <button className='w-[200px] rounded-lg translate-x-[60vw] translate-y-12 py-1 text-white bg-gradient-to-r from-[#7515e3] to-[#2b70f8]' onClick={proceed}><Link to='/'>PROCEED</Link></button>
        </div>
    );
}

import React from 'react';
import computersvgimage from '../../assets/computersvgimage.svg';
import { useNavigate,Link } from 'react-router-dom';


function AdminPanel() {
    const navigate = useNavigate();
    const goToMyself = () => {
        
        navigate('/Add');
      };

  return (
    <div className='flex max-w-[100vw] h-[100vh] justify-center '>
      <div className='flex gap-56'>
        <img src={computersvgimage} width='500px' alt="Computer SVG" />
        <div className='flex flex-col w-[500px] h-[430px]  mt-36 px-8 translate-y-24'>
          <div className='mt-[50px] text-2xl '>
            <input type='text' placeholder='Election Name' className='rounded-2xl border-[5px] border-[#2D21E8] text-black' />
          </div>
          <div className='mt-11 text-2xl '>
            <input type='text' placeholder='Date' className='rounded-2xl border-[5px] border-[#2D21E8] pr-[10px] text-black appearance-none' />
          </div>
          <div className='mt-11 text-2xl'>
            <input type='number' placeholder='Time' className='rounded-2xl border-[5px] border-[#2D21E8] pr-[10px] text-black appearance-none' />
          </div>
          <div className='mt-11 ml-44'>
           
            <button className='bg-[#2D21E8] rounded-2xl px-4 py-1 text-white'>
              <Link to='/'>PROCEED</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
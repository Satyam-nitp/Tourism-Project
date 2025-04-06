import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import data from '../data';

function Car({districtName, state, info, images, fav, like, setlike, likehandle}) {
    const [readmore, setReadmore]=useState(false);
    const ic='>';


    function favHandler(name, fav){
      data.forEach((d)=>{
        if(d.districtName===name) d.fav=!d.fav;
      })
      setlike(!like);
      if(!fav) toast.success("Added to favourite");
      else toast.error("Removed from favourite");
      // favHandler={()=>d.fav=!d.fav}
      console.log(like);
      likehandle();
    }

    const [placeClass, setplaceClass]=useState(false);
    const showPlace = () => {
      setplaceClass(true);
      setTimeout(() => {
        setplaceClass(false);
      }, 3000); // 2000 milliseconds = 2 seconds
    };
    // useEffect(() => {
    //   setlike(false);
    // })
    

  return (
    <div className='flex flex-col items-center rounded-xl bg-[#00000080] gap-4 w-[350px] border-2 border-white p-8 background relative'>
      {
        fav ? <div className='absolute text-red-500 text-[1.75rem] top-[0.8rem] right-7 hide' onClick={()=>favHandler(districtName, fav)}>{fav ? <FaHeart/> : <CiHeart/>}</div> :
        <div className='absolute text-red-500 text-[1.75rem] top-[0.8rem] right-7 show' onClick={()=>favHandler(districtName, fav)}>{fav ? <FaHeart/> : <CiHeart/>}</div>
      }
      <p className='text-[1.25rem] font-bold text-[#ff0000] border-b-2 px-5 border-[#ff0000]'>{districtName}</p>
      <p className='text-[1.15rem] font-medium text-green-600'>{state}</p>
      <p className='text-justify text-sm cursor-pointer'>
        {readmore? info : info.substr(0,155)+'....'}
        <span className='font-semibold text-red-500' onClick={()=>setReadmore(!readmore)}>{readmore ? 'Showless' : 'Readmore'}</span>
      </p>
      <div className='rounded-lg slider gap-1 object-cover w-full h-[250px] flex flex-row overflow-x-scroll flex-nowrap'>
      {
        images.map((img, index)=>{
            return <img key={index} src={img} alt='visit' className='cursor-pointer' onClick={showPlace}/>
        })
      }
      </div>
      {
        placeClass ? <p className='text-[0.8rem] rounded-md text-white bg-black absolute bottom-[80px] px-4 py-2'>{districtName} {state}</p> : <p className='absolute'></p>
      }
      <p className='text-red-600 text-[0.85rem]'>Scroll to see more images <span className='opacity-[75%]'>{ic}</span><span className='opacity-[50%]'>{ic}</span><span className='opacity-[25%]'>{ic}</span></p>
    </div>
  )
}

export default Car

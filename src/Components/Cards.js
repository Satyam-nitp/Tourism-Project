import React, { useState } from 'react'
import data from '../data'
import Car from './Car'
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";


function Cards({like, setlike, cardData, setcardData, setrelike, relike}) {

    function CardHandler(name) {
      if(name!=='fav') setrelike(false);
      const filteredData = name==='All' ? data : (name==='fav' ? data.filter((d) => d.fav === true) : data.filter((d) => d.districtName === name));
      setcardData(filteredData);
    }

    function likehandle(){
      const filteredData = data.filter((d) => d.fav === true);
      if(relike) setcardData(filteredData);
    }

    const [hide, setHide]=useState(false);
    let classHide=`${hide ? 'hidden' : 'shown'}`;
    console.log(classHide);

  return (
    <div className='flex flex-col items-center'>
      <div className=' flex gap-2 mb-4'>
      <button className='border-2 w-[250px] bg-[#00000080] border-green-600 px-4 py-2 font-semibold rounded-sm mb-2' onClick={()=>CardHandler('All')}>All Places</button>
      <button className='border-2 w-[250px] bg-[#00000080] border-green-600 px-4 py-2 font-semibold rounded-sm mb-2' onClick={()=>{CardHandler('fav'); setrelike(true)}}>Favourite Places</button>
      </div>
      <div className={hide ? 'hiddenn' 
                          : 'shownn'}>
        <div className='cursor-pointer absolute w-10 h-10 flex justify-center items-center top-1 right-1 text-[2rem]' 
                        onClick={()=>setHide(!hide)}>{hide ? <CiCircleChevDown/> : <CiCircleChevUp/>}</div>
        {
          data.map((d)=>{
                return <button className='border-2 w-[250px] bg-[#00000080] border-red-600 px-4 py-2 font-semibold rounded-sm'
                key={d.districtName} onClick={()=>CardHandler(d.districtName)}>{d.districtName}</button>
          })
        }
      </div>
      <div className='max-w-[1100px] mt-5 flex flex-wrap items-start justify-center gap-5'>
        {
          cardData.map((d)=>{
              return <Car like={like} setlike={setlike} key={d.districtName} districtName={d.districtName} state={d.state} info={d.info} images={d.images} fav={d.fav} likehandle={likehandle}/>
          })
        }
      </div>
    </div>
  )
}

export default Cards

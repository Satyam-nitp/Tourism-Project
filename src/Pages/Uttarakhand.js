import React, { useState } from 'react'
import Header from '../Components/Header'
import Middle from '../Components/Middle'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import data from '../data'

function Uttarakhand() {
  const [like, setlike]=useState(false);
  const [cardData, setcardData]=useState(data);
  const [relike, setrelike]=useState(false);
  function likehandle(){

  }
  return (
    <div className='flex flex-col text-white items-center gap-6 justify-between bg-[#392727] min-h-screen mt-[70px]'>
      <Header/>
      <Middle/>
      <Cards like={like} setlike={setlike} cardData={cardData} setcardData={setcardData} relike={relike} setrelike={setrelike}/>
      <Footer/>
    </div>
  )
}

export default Uttarakhand
 
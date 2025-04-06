import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Vrindavan from './Pages/Vrindavan'
import Uttarakhand from './Pages/Uttarakhand'

function App() {
  return (
    <div className='w-full min-h-scree absolute'>
      <nav className='w-[1100px] m-auto rounded-[10rem] fixed z-10 top-2 left-[50%] translate-x-[-50%] bg-black bg-opacity-50 text-white font-semibold text-[1.05rem] py-3 px-[100px]'>
        <ul className='flex w-full justify-between items-center'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/vrindavan'>Vrindavan</NavLink>
          </li>
          <li>
            <NavLink to='/uttarakhand'>Uttarakhand</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/vrindavan' element={<Vrindavan/>}></Route>
        <Route path='/uttarakhand' element={<Uttarakhand/>}></Route>
      </Routes>

    </div>
  )
}

export default App

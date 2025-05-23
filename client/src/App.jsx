import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const App = () => {

  const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
      { !isOwnerPath && <Navbar/> }
      <div className='min-h-[70vh]'>
       <Routes>
         <Route path='/' element={<Home/>} />
       </Routes>
      </div>
    </div>
  )
}

export default App
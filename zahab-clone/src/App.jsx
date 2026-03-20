import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Wishlist from './pages/Wishlist/Wishlist'
import Account from './pages/Account/Account'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/account' element={<Account />} />
    </Routes>
    </>
  )
}

export default App

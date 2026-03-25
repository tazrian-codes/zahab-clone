import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Pages from './pages/Pages'
import Home from './pages/Home/Home'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:pageName' element={<Pages />} />
    </Routes>
    </>
  )
}

export default App

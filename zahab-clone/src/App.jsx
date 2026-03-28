import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Pages from './pages/Pages'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:pageName' element={<Pages />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Pages from './pages/Pages'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Shop from './pages/Shop/Shop'
import Wishlist from './pages/Wishlist/Wishlist'
import Checkout from './pages/Checkout/Checkout'


function App() {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:pageName' element={<Pages />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/shop/:category' element={<Shop />} />
      <Route path='/shop/' element={<Shop />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
    </>
  )
}

export default App

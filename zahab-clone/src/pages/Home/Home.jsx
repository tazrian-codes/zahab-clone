import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import PopularItems from '../../components/PopularItems/PopularItems'
import SweetType from '../../components/SweetType/SweetType'
import TraditionalCollection from '../../components/TraditionalCollection/TraditionalCollection'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Banner />
      <PopularItems />
      <SweetType />
      <TraditionalCollection />
      <Info />
      <Footer />
    </div>
  )
}

export default Home
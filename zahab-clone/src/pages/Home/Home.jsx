import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import PopularItems from '../../components/PopularItems/PopularItems'
import SweetType from '../../components/SweetType/SweetType'
import TraditionalCollection from '../../components/TraditionalCollection/TraditionalCollection'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
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
import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="big-banner">
        <img src="/src/assets/resources/banner2.webp" alt="" />
      </div>
      <div className="small-banner">
        <img src="/src/assets/resources/banner3.webp" alt="" />
        <img src="/src/assets/resources/banner4.webp" alt="" />
      </div>
    </div>
  )
}

export default Banner
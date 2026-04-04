import React from "react";
import "./Banner.css";
import banner2 from "../../assets/resources/banner2.webp";
import banner3 from "../../assets/resources/banner3.webp";
import banner4 from "../../assets/resources/banner4.webp";

const Banner = () => {
  return (
    <div className="banner">
      <div className="big-banner">
        <img src={banner2} alt="" />
      </div>
      <div className="small-banner">
        <img src={banner3} alt="" />
        <img src={banner4} alt="" />
      </div>
    </div>
  );
};

export default Banner;

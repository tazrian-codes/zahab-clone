import React, { useState } from "react";
import { sweet_type } from "../../assets/resources/assets";
import HomeCategory from "../HomeCategory/HomeCategory";

const SweetType = () => {
  return (
    <div className="sweet">
      <HomeCategory title='Sweet Type' subtitle='Sweet Collection' imageSrc="/src/assets/resources/sweet.webp" products={sweet_type} />
    </div>
  );
};

export default SweetType;

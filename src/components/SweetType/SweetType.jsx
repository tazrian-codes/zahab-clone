import React, { useState } from "react";
import { sweet_type } from "../../assets/resources/assets";
import HomeCategory from "../HomeCategory/HomeCategory";
import sweet from "../../assets/resources/sweet.webp";

const SweetType = () => {
  return (
    <div className="sweet">
      <HomeCategory
        title="Sweet Type"
        subtitle="Sweet Collection"
        imageSrc={sweet}
        products={sweet_type}
      />
    </div>
  );
};

export default SweetType;

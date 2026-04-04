import React, { useState } from "react";
import { traditional_type } from "../../assets/resources/assets";
import HomeCategory from "../HomeCategory/HomeCategory";
import traditional from "../../assets/resources/traditional.webp";

const TraditionalCollection = () => {
  return (
    <div className="traditional">
      <HomeCategory
        title="Traditional Type"
        subtitle="Traditional Collection"
        imageSrc={traditional}
        products={traditional_type}
      />
    </div>
  );
};

export default TraditionalCollection;

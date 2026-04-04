import React, { useState } from "react";
import { traditional_type } from "../../assets/resources/assets";
import HomeCategory from "../HomeCategory/HomeCategory";

const TraditionalCollection = () => {
  return (
    <div className="traditional">
      <HomeCategory
        title="Traditional Type"
        subtitle="Traditional Collection"
        imageSrc="/src/assets/resources/traditional.webp"
        products={traditional_type}
      />
    </div>
  );
};

export default TraditionalCollection;

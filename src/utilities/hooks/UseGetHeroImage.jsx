import React, { useEffect, useState } from "react";

const UseGetHeroImage = (width) => {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    width < 768
      ? setHeroImage("assets/Hero Image (Mobile).png")
      : setHeroImage("assets/Hero Image (Desktop).png");
  }, [width]);

  return heroImage;
};

export default UseGetHeroImage;

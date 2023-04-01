import React, { useEffect, useState } from "react";
import UseGetWindowsWidth from "./UseGetWindowsWidth";

const UseGetHeroImage = () => {
  const width = UseGetWindowsWidth();
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    width < 768
      ? setHeroImage("assets/Hero Image (Mobile).png")
      : setHeroImage("assets/Hero Image (Desktop).png");
  }, [width]);

  return heroImage;
};

export default UseGetHeroImage;

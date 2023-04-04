import React, { useEffect, useState } from "react";
import { getStarted } from "../constants";

const UseGetHeroImage = (width) => {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    if (width <= 600) setHeroImage(getStarted.heroMobile);
    if (width > 600 && width <= 1000) setHeroImage(getStarted.heroTablet);
    if (width > 1000) setHeroImage(getStarted.heroDesktop);
  }, [width]);

  return heroImage;
};

export default UseGetHeroImage;

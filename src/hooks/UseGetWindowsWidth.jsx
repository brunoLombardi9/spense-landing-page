import React, { useEffect, useState } from "react";

const UseGetWindowsWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.width);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, [width]);

  return width;
};

export default UseGetWindowsWidth;

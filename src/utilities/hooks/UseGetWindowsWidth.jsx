import React, { useEffect, useState } from "react";

const UseGetWindowsWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, [window.innerWidth]);

  return width;
};

export default UseGetWindowsWidth;

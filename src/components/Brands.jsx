import React from "react";
import { Container, Image } from "react-bootstrap";
import { brandsImages } from "../utilities/constants";
import "./css/Brands.css";
import UseGetWindowsWidth from "../utilities/hooks/UseGetWindowsWidth";

const Brands = () => {
  const width = UseGetWindowsWidth();
  return (
    <Container fluid={width < 1000} className="py-4 d-flex">
      {brandsImages.map((b) => {
        if(width < 600 && b.id > 2) return;  
        if(width < 950 && b.id > 4) return;
        return(
          <Image className="brandsImages m-auto" key={b.brand} src={b.logoUrl} />
        )
      })}
     
    </Container>
  );
};

export default Brands;

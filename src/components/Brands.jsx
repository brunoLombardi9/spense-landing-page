import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { brandsImages } from "../utilities/constants";
import "./css/Brands.css";

const Brands = () => {
  return (
    <Container className="p-4">
      <Row className="">
        {brandsImages.map((b) => (
          <Image className="brandsImages mx-auto" key={b.brand} src={b.logoUrl} />
        ))}
      </Row>
    </Container>
  );
};

export default Brands;

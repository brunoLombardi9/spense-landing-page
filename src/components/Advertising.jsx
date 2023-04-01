import React from "react";
import { Container, Row } from "react-bootstrap";

const Advertising = () => {
  return (
    <Container fluid className="bg-black">
      <Row>
        <p className="text-center text-white fw-bold m-auto my-2">
          🎉 To celebrate Spense's launch, we Will waiving all fees for the
          entire month of April.{" "}
          <span className="text-decoration-underline">
            You Will be receiving 100% of the earnings.
          </span>
        </p>
      </Row>
    </Container>
  );
};

export default Advertising;

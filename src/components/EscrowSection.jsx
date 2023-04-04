import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { escrow } from "../utilities/constants";
import UseGetWindowsWidth from "../utilities/hooks/UseGetWindowsWidth";
import UseGetMockup from "../utilities/hooks/UseGetMockup";

const EscrowSection = () => {
const width = UseGetWindowsWidth();
const mockup = UseGetMockup(width);
  return (
    <Container> 
      <Row className="bg-light-grey rounded m-1">
        <Col lg={6} className="px-5 pt-5">
          <h2 className="fw-bold">{escrow.title}</h2>
          <h3 className="link-brown display-5">{escrow.description}</h3>
          <a href="./" className="fw-bold link-brown">
            Learn More About Escrow ➝
          </a>
        </Col>

        <Col lg={6} className="d-flex justify-content center">
          <Image fluid src={mockup} className="mx-auto"/>
        </Col>
      </Row>
    </Container>
  );
};

export default EscrowSection;

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import UseGetHeroImage from "../hooks/UseGetHeroImage";
import { getStarted } from "../utilities/constants";
import "./css/GetStartedSection.css";

const GetStartedSection = () => {
  const heroImage = UseGetHeroImage();

  return (
    <Container className="bg-light-grey">
      <Row>
        <Col md={6}>
          <h1 className="fw-bold ">{getStarted.title}</h1>
          <h2 className="text-grey">{getStarted.description}</h2>

          <div className="d-flex flex-column">
            {getStarted.features.map((f) => (
              <div className="d-flex">
                <Image
                  src={getStarted.checkIcon}
                  className="checkIcon my-1 me-1"
                />
                <h3>{f}</h3>
              </div>
            ))}
          </div>
        </Col>

        <Col md={6}>
          <Image src={heroImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default GetStartedSection;

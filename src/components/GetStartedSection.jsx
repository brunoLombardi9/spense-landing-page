import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import UseGetHeroImage from "../utilities/hooks/UseGetHeroImage";
import UseGetWindowsWidth from "../utilities/hooks/UseGetWindowsWidth";
import { getStarted } from "../utilities/constants";
import "./css/GetStartedSection.css";
import GetStartedBtn from "./GetStartedBtn";

const GetStartedSection = () => {
  const width = UseGetWindowsWidth();
  const heroImage = UseGetHeroImage(width);
  
  return (
    <Col className="bg-light-grey">
      <Container fluid={width < 991} className="bg-light-grey">
        <Row className="flex-column-reverse flex-lg-row pb-5 bg-light-grey">
          <Col lg={6}>
            <h1 className="display-3 fw-bold mt-5">{getStarted.title}</h1>
            <h2 className="link-brown display-5">{getStarted.description}</h2>

            <div className="d-flex flex-column">
              {getStarted.features.map((f) => (
                <div className="d-flex align-items-center" key={f}>
                  <Image
                    src={getStarted.checkIcon}
                    className="checkIcon my-1 me-1"
                  />
                  <h3 className="display-6 link-brown fw-bold my-auto">{f}</h3>
                </div>
              ))}

              <form className="row d-flex mt-4">
                <Col xs={7} lg={4}>
                  <input
                    type="email"
                    class="form-control p-3"
                    placeholder="john@example.com"
                  />
                </Col>
                <Col xs={4} lg={4}>
                  <GetStartedBtn />
                </Col>
              </form>
            </div>
          </Col>

          <Col lg={6} className="d-flex">
            <Image src={heroImage} fluid className="m-auto heroImage" />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default GetStartedSection;

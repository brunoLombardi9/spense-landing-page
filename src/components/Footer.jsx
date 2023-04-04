import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UseGetWindowsWidth from "../utilities/hooks/UseGetWindowsWidth";
import { footer } from "../utilities/constants";
import FooterUl from "./FooterUl";

const Footer = () => {
  const width = UseGetWindowsWidth();
  return (
    <Col className="bg-black">
      <Container fluid={width < 800} className="bg-black p-4">
        <Row>
          <Col md={6} lg={4}>
            <a href="./" className="fw-bold link-white text-decoration-none">
              spense.
            </a>

            <h3 className="link-dark-grey display-6 my-auto mt-2 mb-2">
              {footer.description}
            </h3>
          </Col>

          <Col md={6} lg={4} className="d-flex">
            <FooterUl section={footer.sections[0]} />
            <FooterUl section={footer.sections[1]} />
          </Col>

          <Col md={6} lg={4} className="d-flex">
            <FooterUl section={footer.sections[2]} />
            <FooterUl section={footer.sections[3]} />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Footer;

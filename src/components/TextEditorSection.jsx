import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { textEditor } from "../utilities/constants";

const TextEditorSection = () => {
  return (
    <Container>
      <Row className="flex-column-reverse flex-lg-row">
        <Col lg={6} className="pt-4">
          <Image fluid src={textEditor.image} />
        </Col>
        <Col lg={6} className="d-flex flex-column justify-content-center pt-4">
          <h2 className="fw-bold display-4">{textEditor.title}</h2>
          <h3 className="link-brown display-5">{textEditor.description}</h3>
          <a href="./" className="fw-bold link-brown">
            Text Editor Live Demo ➝
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default TextEditorSection;

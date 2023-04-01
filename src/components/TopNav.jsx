import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { navOptions } from "../utilities/constants";

const TopNav = () => {
  return (
    <Container as="header">
      <Navbar className="d-flex justify-content-center">
        <Nav>
          {navOptions.map((option) => (
            <Nav.Item key={option}>
              <Nav.Link className="link-black">{option}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default TopNav;

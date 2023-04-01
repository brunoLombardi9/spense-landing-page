import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { topNav } from "../utilities/constants";
import UseGetWindowsWidth from "../hooks/UseGetWindowsWidth";
import GetStartedBtn from "./GetStartedBtn";

const TopNav = () => {
  const width = UseGetWindowsWidth();

  return (
    <Navbar className="py-5 bg-light-grey" collapseOnSelect expand="lg" as="header">
      <Container fluid={width < 992}>
        <Navbar.Brand href="./" className="fw-bold">
          spense.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {topNav.navOptions.map((option) => (
              <Nav.Item key={option}>
                <Nav.Link className="link-black">{option}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Nav>
            <Nav.Link className="link-black my-auto me-3">Login</Nav.Link>
            <GetStartedBtn/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;

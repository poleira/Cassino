import React, { FC, ReactElement } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar: FC = (): ReactElement => {
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="brand">
              Asteroids Miners
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/gameplay" className="link">
                Gameplay
              </NavLink>
              <NavLink to="/tokenomics" className="link">
                Tokenomics
              </NavLink>
              <NavLink to="/roadmap" className="link">
                Roadmap
              </NavLink>
              <a href="/whitepaper" className="link">
                Whitepaper
              </a>
              <NavLink to="/play" className="mx-3 btn btn-blue text-white">
                Play Now
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

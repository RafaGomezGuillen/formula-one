import React from "react";
import "./NavigationBar.css";

// Import Boostrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Import images
import F1Logo from "../../assets/img/F1Logo.svg";

// Import JSON
import teams from "../../assets/json/TeamStats.json";

export const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#e10600" }}
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/formula-one/" title="Go to home page">
          <img
            src={F1Logo}
            style={{ width: "110px", marginRight: "10px" }}
            className="d-inline-block align-top"
            alt="Formula One logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/formula-one/Drivers" title="Go to drivers page">
              Drivers
            </Nav.Link>
            <Nav.Link href="/formula-one/Schedule" title="Go to schedule page">
              Schedule
            </Nav.Link>
            <NavDropdown title="Teams" id="basic-nav-dropdown">
              <div className="team-container">
                {teams.map((team) => (
                  <NavDropdown.Item key={team.Pos} href={`/formula-one/Team/${team.Pos}`}>
                    {team.Team}
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
            <Nav.Link href="/formula-one/Results" title="Go to results page">
              Results
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

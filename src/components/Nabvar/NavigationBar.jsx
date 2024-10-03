import React from "react";
import "./NavigationBar.css";

// Import Boostrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Import images
import F1Logo from "../../assets/img/F1Logo.svg";

export const NavigationBar = () => {
  const carData = [
    "Red Bull",
    "Mercedes",
    "Ferrari",
    "McLaren",
    "Alpine",
    "Aston Martin",
    "Alfa Romeo",
    "Haas",
    "Williams",
    "AlphaTauri",
  ];

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#e10600" }}
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/" title="Go to home page">
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
            <Nav.Link href="/" title="Go to home page">Home</Nav.Link>
            <Nav.Link href="#link" title="Go to schedule page">Schedule</Nav.Link>
            <NavDropdown title="Teams" id="basic-nav-dropdown">
              <div className="team-container">
                {carData.map((car, index) => (
                  <NavDropdown.Item key={index} href={`/teams/${car}`}>
                    {car}
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
            <Nav.Link href="#link" title="Go to results page">Results</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

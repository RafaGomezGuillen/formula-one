import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Import images
import F1Logo from "../../assets/img/F1Logo.svg";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Home</h4>
            <ul>
              <li>
                <Link
                  to="/Home/RegulationChanges"
                  title="Go to Regulation Changes page"
                >
                  Regulation Changes
                </Link>
              </li>
              <li>
                <Link
                  to="/Home/SeasonChanges"
                  title="Go to Season Changes page"
                >
                  Season Changes
                </Link>
              </li>
              <li>
                <Link to="/Home/SeasonIntroduction" title="Go to page">
                  Season Introduction
                </Link>
              </li>
              <li>
                <Link
                  to="/Home/SeasonSummary"
                  title="Go to Season Summary page"
                >
                  Season Summary
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/RafaGomezGuillen/formula-one"
                  title="GitHub repo page"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li>
                <Link to="/Drivers" title="Go to Drivers page">
                  Drivers
                </Link>
              </li>
              <li>
                <Link to="/Schedule" title="Go to Schedule page">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/Results" title="Go to Results page">
                  Results
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>My Pages</h4>
            <ul>
              <li>
                <Link
                  to="https://symphobeats.firebaseapp.com/en-US/login"
                  title="Go to Symphobeats"
                >
                  Symphobeats
                </Link>
              </li>
              <li>
                <Link
                  to="https://rafagomezguillen.github.io/pet-generator/"
                  title="Go to Pet Generator"
                ></Link>
              </li>
              <li>
                <Link
                  to="https://rafagomezguillen.github.io/learn-how-to-code/"
                  title="Go to Learn How To Code"
                >
                  Learn How To Code
                </Link>
              </li>
              <li>
                <Link
                  to="https://rafagomezguillen.github.io/smooth-games/"
                  title="Go to Smooth Games"
                >
                  Smooth Games
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link
                to="https://github.com/RafaGomezGuillen"
                title="Go to GitHub page"
              >
                <i className="bi bi-github"></i>
              </Link>
              <Link
                to="https://www.instagram.com/rafagomez.jpg/"
                title="Go to Instagram page"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/rafael-g%C3%B3mez-guill%C3%A9n/?locale=en_US"
                title="Go to LinkedIn oage"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-col" style={{ marginTop: "20px" }}>
            <Link to="/" title="Go to home page">
              <img
                src={F1Logo}
                alt="Formula One logo"
                style={{
                  width: "110px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              />
            </Link>
          </div>
          <div className="footer-col-bottom">
            <p>
              © {year} Formula One World Championship Limited. Rafael Gómez
              Guillén.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from "react";
import "./Footer.css";

// Import images
import F1Logo from "../../assets/img/F1Logo.svg";

// Add titles to links rafa

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
                <a href="/Home/RegulationChanges">Regulation Changes</a>
              </li>
              <li>
                <a href="/Home/SeasonChanges">Season Changes</a>
              </li>
              <li>
                <a href="/Home/SeasonIntroduction">Season Introduction</a>
              </li>
              <li>
                <a href="/Home/SeasonSummary">Season Summary</a>
              </li>
              <li>
                <a href="https://github.com/RafaGomezGuillen/formula-one">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li>
                <a href="/Drivers">Drivers</a>
              </li>
              <li>
                <a href="/Schedule">Schedule</a>
              </li>
              <li>
                <a href="/Teams/RedBull">Red Bull Team</a>
              </li>
              <li>
                <a href="/Results">Results</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>My Pages</h4>
            <ul>
              <li>
                <a href="https://symphobeats.com/">Symphobeats</a>
              </li>
              <li>
                <a href="https://rafagomezguillen.github.io/pet-generator/">
                  Pet Generator
                </a>
              </li>
              <li>
                <a href="https://rafagomezguillen.github.io/learn-how-to-code/">
                  Learn How To Code
                </a>
              </li>
              <li>
                <a href="https://rafagomezguillen.github.io/smooth-games/">
                  Smooth Match 3
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://github.com/RafaGomezGuillen">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/rafagomez.jpg/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/rafael-g%C3%B3mez-guill%C3%A9n/?locale=en_US">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-col" style={{ marginTop: "20px" }}>
            <a href="/">
              <img
                src={F1Logo}
                alt="Formula One logo"
                style={{
                  width: "110px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              />
            </a>
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

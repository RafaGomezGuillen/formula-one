import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

// Import Boostrap components
import Card from "react-bootstrap/Card";

// Import images
import Introduction from "../../assets/img/Introduction.jpg";
import Regulation from "../../assets/img/Regulation.jpg";
import Summary from "../../assets/img/Summary.jpg";
import Changes from "../../assets/img/Changes.jpg";

export const Landing = () => {
  return (
    <div className="landing-container">
      <section>
        <Card>
          <Card.Img src={Introduction} alt="Season introduction image" />
          <Card.Body>
            <Card.Title>Season introduction</Card.Title>
            <Card.Text>
              The 2022 Formula One Championship was a motor racing competition
              for Formula One cars, which was the 73rd edition of the Formula
              One World Championship. The championship saw the introduction of
              significant changes to the sport’s technical regulations, which
              had been planned for 2021, but were delayed until 2022 due to the
              COVID-19 pandemic.
            </Card.Text>
            <Link
              to="/home/SeasonIntroduction"
              title="Go to Season introduction"
              className="btn"
            >
              READ MORE
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img src={Regulation} alt="Regulation changes image" />
          <Card.Body>
            <Card.Title>Regulation changes</Card.Title>
            <Card.Text>
              The 2022 F1 season will see the introduction of a new generation
              of cars, designed to improve the quality of racing and allow
              closer battles on track. In addition to the technical changes, the
              2022 season will also see some changes in the sporting
              regulations, such as a frozen power unit development, a sliding
              scale of aerodynamic testing based on the constructors’ standings,
              and a return to a two-part pre-season test.
            </Card.Text>
            <Link
              to="/home/RegulationChanges"
              title="Go to Regulation changes"
              className="btn"
            >
              READ MORE
            </Link>
          </Card.Body>
        </Card>
      </section>

      <section>
        <Card>
          <Card.Img src={Summary} alt="Season summary image" />
          <Card.Body>
            <Card.Title>Season summary</Card.Title>
            <Card.Text>
              Max Verstappen won his second consecutive World Drivers
              Championship driving for Red Bull Racing. Charles Leclerc finished
              runner-up, driving for Ferrari. Sergio Pérez was third, driving
              for Red Bull Racing. Red Bull Racing won their fifth World
              Constructors Championship.
            </Card.Text>
            <Link
              to="/home/SeasonSummary"
              title="Go to Season summary"
              className="btn"
            >
              READ MORE
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            src={Changes}
            alt="Team, driver and mid-season changes image"
          />
          <Card.Body>
            <Card.Title>Team, driver and mid-season changes</Card.Title>
            <Card.Text>
              Honda initially stated that they would not supply power units
              beyond 2021. Kimi Räikkönen retired following the conclusion of
              the 2021 championship. Ahead of the Bahrain Grand Prix, Sebastian
              Vettel tested positive for coronavirus...
            </Card.Text>
            <Link
              to="/home/SeasonChanges"
              title="Go to Team, driver and mid-season changes"
              className="btn"
            >
              READ MORE
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
              Project made by Rafael Gómez Guillén. Technlogies used:{" "}
              <span
                style={{
                  fontWeight: "500",
                }}
              >
                Vite React JS, Boostrap and apexcharts and GH Pages.
              </span>
            </Card.Text>
            <Link
              to="https://github.com/RafaGomezGuillen/formula-one"
              className="btn"
              title="Go to GitHub repository"
            >
              READ MORE
            </Link>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

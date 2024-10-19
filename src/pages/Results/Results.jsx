import React from "react";
import "./Results.css";

// Immport componets
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import Table from "react-bootstrap/Table";

// Import images
import driversImage from "../../assets/img/Summary.jpg";
import constructorImage from "../../assets/img/Changes4.jpg";

// Import JSON
import drivers from "../../assets/json/DriverStatistics.json";
import constructors from "../../assets/json/TeamStats.json";

const ResultsSummary = ({ title, desc, image }) => {
  return (
    <div className="results-summary-container">
      <div>
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          {title}
        </h2>

        <p>{desc}</p>
      </div>

      <div>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            borderTopRightRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

const TitleContainer = ({ title }) => {
  return (
    <div>
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "400",
          borderLeft: "2.5px solid #000",
          borderTop: "2.5px solid #000",
          borderTopLeftRadius: "20px",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export const Results = () => {
  return (
    <div>
      <Jumbotron title={"Results"} />

      <ResultsSummary
        title={"Driver standings"}
        desc={
          "The 2022 season saw the arrival of a new generation of cars, designed to allow for even closer racing. Ferrari initially took full advantage, with Charles Leclerc returning the Scuderia to winning ways, but their title challenge ultimately faded in the face of a relentless Max Verstappen and Red Bull team, who secured their first championship double since 2013. Mercedes were the only other team to win a race, but it was George Russell who took a celebrated maiden victory, as team mate Lewis Hamilton failed to top a podium for the first time in his illustrious F1 career."
        }
        image={driversImage}
      />

      <Table
        striped
        bordered
        responsive
        style={{
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>POS</th>
            <th>DRIVER</th>
            <th>CAR</th>
            <th>POINTS</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.Pos}>
              <td>{driver.Pos}</td>
              <td>{driver.Driver}</td>
              <td>{driver.Team}</td>
              <td>{driver.Points}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ResultsSummary
        title={"Constructor standings"}
        desc={
          "Max Verstappen won his second consecutive World Drivers Championship driving for Red Bull Racing. Charles Leclerc finished runner-up, driving for Ferrari. Sergio Pérez was third, driving for Red Bull Racing. Red Bull Racing won their fifth World Constructors Championship."
        }
        image={constructorImage}
      />

      <Table
        striped
        bordered
        responsive
        style={{
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>POS</th>
            <th>TEAM</th>
            <th>POINTS</th>
          </tr>
        </thead>
        <tbody>
          {constructors.map((constructors) => (
            <tr key={constructors.Pos}>
              <td>{constructors.Pos}</td>
              <td>{constructors.Team}</td>
              <td>{constructors.Points}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TitleContainer title={"Driver Standings Statistics"} />

      <Table
        striped
        bordered
        responsive
        style={{
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>POS</th>
            <th>DRIVER</th>
            <th>TEAM</th>
            <th>GRAND PRIX</th>
            <th>WINS</th>
            <th>PODIUMS</th>
            <th>POLE POSITIONS</th>
            <th>FASTEST LAPS</th>
            <th>LAPS LED</th>
            <th>POINTS</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.Pos}>
              <td>{driver.Pos}</td>
              <td>{driver.Driver}</td>
              <td>{driver.Team}</td>
              <td>{driver.GrandPrix}</td>
              <td>{driver.Wins}</td>
              <td>{driver.Podiums}</td>
              <td>{driver.PolePosition}</td>
              <td>{driver.FastestLap}</td>
              <td>{driver.LapsLed}</td>
              <td>{driver.Points}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TitleContainer title={"Team Standings Statistics"} />

      <Table
        striped
        bordered
        responsive
        style={{
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>POS</th>
            <th>TEAM</th>
            <th>CHASIS</th>
            <th>ENGINE</th>
            <th>GRAND PRIX</th>
            <th>WINS</th>
            <th>PODIUMS</th>
            <th>POLE POSITIONS</th>
            <th>FASTEST LAPS</th>
            <th>LAPS LED</th>
            <th>POINTS</th>
          </tr>
        </thead>
        <tbody>
          {constructors.map((constructors) => (
            <tr key={constructors.Pos}>
              <td>{constructors.Pos}</td>
              <td>{constructors.Team}</td>
              <td>{constructors.Chasis}</td>
              <td>{constructors.Engine}</td>
              <td>{constructors.GrandPrix}</td>
              <td>{constructors.Wins}</td>
              <td>{constructors.Podiums}</td>
              <td>{constructors.PolePositions}</td>
              <td>{constructors.FastestLaps}</td>
              <td>{constructors.LapsLed}</td>
              <td>{constructors.Points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

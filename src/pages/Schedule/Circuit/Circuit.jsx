import React from "react";
import "./Circuit.css";

// Import componets
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";
import Table from "react-bootstrap/Table";

// Import JSON
import results from "../../../assets/json/TeamStandings.json";

const CircuitResultsTable = ({ circuit, driverResults }) => {
  // Get the circuit's key for results based on the GrandPrix abbreviation
  const circuitKey = {
    "Bahrain Grand Prix": "BHR",
    "Saudi Arabian Grand Prix": "ARA",
    "Australian Grand Prix": "AUS",
    "Emilia-Romagna Grand Prix": "EMI",
    "Miami Grand Prix": "MIA",
    "Spanish Grand Prix": "ESP",
    "Monaco Grand Prix": "MON",
    "Azerbaijan Grand Prix": "AZE",
    "Canadian Grand Prix": "CAN",
    "British Grand Prix": "GBR",
    "Austrian Grand Prix": "AUT",
    "French Grand Prix": "FRA",
    "Hungarian Grand Prix": "HUN",
    "Belgian Grand Prix": "BEL",
    "Dutch Grand Prix": "NED",
    "Italian Grand Prix": "ITA",
    "Singapore Grand Prix": "SIN",
    "Japanese Grand Prix": "JPN",
    "United States Grand Prix": "USA",
    "Mexican Grand Prix": "MEX",
    "São Paulo Grand Prix": "SAO",
    "Abu Dhabi Grand Prix": "ABU",
  }[circuit.GrandPrix];

  return (
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
          <th>Nº</th>
          <th>DRIVER</th>
          <th>CAR</th>
        </tr>
      </thead>
      <tbody>
        {driverResults
          .sort((a, b) => a[circuitKey] - b[circuitKey]) // Sort drivers by position
          .map((driver, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{driver.DriverNumber}</td>
              <td>{driver.Driver}</td>
              <td>{driver.Car}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export const Circuit = ({ circuit }) => {
  return (
    <div>
      <Jumbotron title={circuit.GrandPrix} />

      <div className="circuit-stats-container">
        <div>
          <img
            src={circuit.Image}
            alt={circuit.GrandPrix}
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </div>

        <div>
          <img
            src={circuit.ImageTrack}
            alt={`Image of ${circuit.Circuit}`}
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </div>

        <div className="circuit-info">
          <div
            style={{
              fontSize: "32px",
              fontWeight: "500",
            }}
          >
            {`${circuit.Round} - ${circuit.GrandPrix}`}
          </div>
          <div className="circuit-info-imgs">
            <img
              src={circuit.Country}
              alt={`Country of ${circuit.GrandPrix}`}
              style={{
                width: "100px",
                height: "50px",
              }}
            />
          </div>
        </div>

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
              <th>Race date</th>
              <th>First grand prix</th>
              <th>Laps</th>
              <th>Circuit lenght (km)</th>
              <th>Race distance (km)</th>
              <th>Lap record</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{circuit.RaceDate}</td>
              <td>{circuit.FirstGrandPrix}</td>
              <td>{circuit.Laps}</td>
              <td>{circuit.Lenght}</td>
              <td>{circuit.Distance}</td>
              <td>{circuit.LapRecord}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: "500",
          borderTop: "solid black",
          borderLeft: "solid black",
          borderTopLeftRadius: "20px",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "5px",
        }}
      >
        Race results
      </h2>

      <CircuitResultsTable circuit={circuit} driverResults={results} />
    </div>
  );
};

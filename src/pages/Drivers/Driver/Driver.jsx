import React from "react";
import "./Driver.css";

// Import componets
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";
import { FormulaCarousel } from "../../../components/FormulaCarousel/FormulaCarousel";
import { DriverLineChart } from "../../../components/DriverLineChart/DriverLineChart";
import Table from "react-bootstrap/Table";

export const Driver = ({ driver }) => {
  return (
    <div>
      <Jumbotron title={driver.Driver} />

      <div className="driver-stats-container">
        <div>
          <img
            src={driver.Logo}
            alt={driver.Driver}
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </div>

        <div>
          <img
            src={driver.Image1}
            alt={`Image of ${driver.Driver}`}
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </div>

        <div className="driver-info">
          <div
            style={{
              fontSize: "32px",
              fontWeight: "500",
            }}
          >{`${driver.Pos} - ${driver.Driver}`}</div>
          <div className="driver-info-imgs">
            <img
              src={driver.Helmet}
              alt={`Helmet of ${driver.Driver}`}
              style={{
                width: "100px",
                height: "50px",
              }}
            />
            <img
              src={driver.Country}
              alt={`Country of ${driver.Driver}`}
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
              <th>Position standing</th>
              <th>Team</th>
              <th>Grand Prix entered</th>
              <th>Wins</th>
              <th>Podiums</th>
              <th>Pole position</th>
              <th>Fastest lap</th>
              <th>Laps led</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{driver.Pos}</td>
              <td>{driver.Team}</td>
              <td>{driver.GrandPrix}</td>
              <td>{driver.Wins}</td>
              <td>{driver.Podiums}</td>
              <td>{driver.PolePosition}</td>
              <td>{driver.FastestLap}</td>
              <td>{driver.LapsLed}</td>
              <td>{driver.Points}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <FormulaCarousel images={[driver.Image2, driver.Image3, driver.Image4]} />

      <DriverLineChart driver={driver} />
    </div>
  );
};

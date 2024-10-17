import React from "react";
import "./LandingDrivers.css";
import { Link } from "react-router-dom";

// Import components
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";

// Import JSON
import Drivers from "../../../assets/json/DriverStatistics.json";

export const LandingDrivers = () => {
  return (
    <div>
      <Jumbotron title={"F1 Drivers 2022"} />

      <div className="drivers-container">
        {Drivers.map((driver) => (
          <Link
            key={driver.Pos}
            to={`/Driver/${driver.Driver.replace(" ", "")}`}
          >
            <div className="driver-card">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gridTemplateRows: "1fr",
                  borderBottom: "1px solid black",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "bolder",
                    textAlign: "left",
                  }}
                >
                  {driver.Pos}
                </div>
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "300",
                    textAlign: "right",
                  }}
                >
                  {driver.Points} PTS
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "5fr 1fr",
                  gridTemplateRows: "1fr",
                  borderBottom: "1px solid black",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                  }}
                >
                  {driver.Driver}
                </div>
                <div>
                  <img
                    src={`${driver.Country}`}
                    alt={driver.Driver}
                    style={{ width: "100%", height: "45px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  color: "gray",
                  fontSize: "25px",
                }}
              >
                {driver.Team}
              </div>

              <div
                style={{
                  display: "flex",
                  alignContent: "right",
                  justifyContent: "right",
                  padding: "5px",
                }}
              >
                <img
                  src={`${driver.Image}`}
                  alt={driver.Driver}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

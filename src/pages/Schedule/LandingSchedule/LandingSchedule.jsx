import React from "react";
import "./LandingSchedule.css";
import { Link } from "react-router-dom";

// Import components
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";

// Import JSON
import Circuits from "../../../assets/json/Circuits.json";

// Import images
import flag from "../../../assets/img/flag-asset.png";

export const LandingSchedule = () => {
  return (
    <div>
      <Jumbotron title={"F1 Schedule 2022"} />

      <div className="schedule-container">
        {Circuits.map((circuit) => (
          <Link key={circuit.Round} to={`/schedule/${circuit.Round}`}>
            <div className="schedule-card">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "5fr 1fr",
                  gridTemplateRows: "1fr",
                  borderBottom: "1px solid black",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "bolder",
                    textAlign: "left",
                    color: "#f00300",
                  }}
                >
                  ROUND {circuit.Round}
                </div>
                <div>
                  <img
                    src={`${circuit.Country}`}
                    alt={circuit.Circuit}
                    style={{ width: "100%", height: "45px" }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gridTemplateRows: "1fr",
                  borderBottom: "1px solid black",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    textAlign: "left",
                  }}
                >
                  {circuit.RaceDate}
                </div>
                <div>
                  <img
                    src={flag}
                    alt="flag asset"
                    style={{
                      width: "100%",
                      height: "20px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  borderBottom: "1px solid black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    textAlign: "left",
                  }}
                >
                  {`${circuit.GrandPrix} >`}{" "}
                </span>

                <br />

                <span>{circuit.Circuit}</span>
              </div>
              <img
                src={`${circuit.Image}`}
                alt={circuit.Circuit}
                style={{ width: "100%", paddingTop: "10px" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

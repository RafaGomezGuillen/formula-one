import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

// Import compenents
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import { FormulaCarousel } from "../../components/FormulaCarousel/FormulaCarousel";
import { GroupedBarChart } from "../../components/GroupedBarChart/GroupedBarChart";
import { Table } from "react-bootstrap";

// Import JSON
import standings from "../../assets/json/TeamStandings.json";

export const Team = ({ team }) => {
  return (
    <div>
      <Jumbotron title={team.Team} />

      <div className="team-stats-container">
        <div>
          <img
            src={team.logo}
            alt={team.Team}
            style={{
              width: "100%",
            }}
          />
        </div>

        <div className="team-drivers-container">
          {team.Drivers.map((driver) => (
            <Link
              to={`/Driver/${driver.ID}`}
              title={`Go to ${driver.Driver} page`}
              key={driver.ID}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <img
                    src={driver.Image}
                    alt={driver.Driver}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: "32px",
                    textAlign: "center",
                  }}
                >
                  {driver.Driver}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Table
        striped
        bordered
        responsive
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th>Full team name</th>
            <th>Base</th>
            <th>Team chief</th>
            <th>Technical Chief</th>
            <th>Chassis</th>
            <th>Power Unit</th>
            <th>First Team Entry</th>
            <th>World Championships</th>
            <th>Highest Race Finish</th>
            <th>Pole Positions</th>
            <th>Fastest Laps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{team.FullTeamName}</td>
            <td>{team.Base}</td>
            <td>{team.TeamChief}</td>
            <td>{team.TechnicalChief}</td>
            <td>{team.Chasis}</td>
            <td>{team.Engine}</td>
            <td>{team.FirstTeamEntry}</td>
            <td>{team.WorldChampionships}</td>
            <td>{team.HighestRaceFinish}</td>
            <td>{team.PolePositions}</td>
            <td>{team.FastestLaps}</td>
          </tr>
        </tbody>
      </Table>

      <FormulaCarousel
        images={[team.Image1, team.Image2, team.Image3, team.Image4]}
      />

      <GroupedBarChart driverResults={standings} selectedDrivers={team.Drivers} />
    </div>
  );
};

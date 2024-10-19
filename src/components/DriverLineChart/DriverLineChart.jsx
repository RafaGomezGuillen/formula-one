import React from "react";
import ReactApexChart from "react-apexcharts";

export const DriverLineChart = ({ driver }) => {
  // Extract race results from the driver object
  const raceResults = [
    driver.BHR,
    driver.ARA,
    driver.AUS,
    driver.EMI,
    driver.MIA,
    driver.ESP,
    driver.MON,
    driver.AZE,
    driver.CAN,
    driver.GBR,
    driver.AUT,
    driver.FRA,
    driver.HUN,
    driver.BEL,
    driver.NED,
    driver.ITA,
    driver.SIN,
    driver.JPN,
    driver.USA,
    driver.MEX,
    driver.SÃO,
    driver.ABU,
  ];

  const raceNames = [
    "BHR",
    "ARA",
    "AUS",
    "EMI",
    "MIA",
    "ESP",
    "MON",
    "AZE",
    "CAN",
    "GBR",
    "AUT",
    "FRA",
    "HUN",
    "BEL",
    "NED",
    "ITA",
    "SIN",
    "JPN",
    "USA",
    "MEX",
    "SÃO",
    "ABU",
  ];

  const chartOptions = {
    series: [
      {
        name: driver.Driver,
        data: raceResults.map((result) => (result === "Ret" ? null : result)),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: `${driver.Driver} - Race Results (20 includes P20, DNFs, DNSs, DWs and DNPs)`,
        align: "left",
      },
      markers: {
        size: 5,
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: raceNames,
        title: {
          text: "Grand Prix",
        },
      },
      yaxis: {
        title: {
          text: "Position",
        },
        reversed: true,
        min: 1,
        max: 20,
      },
    },
  };

  return (
    <div id="chart" style={{marginTop: "20px"}}>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="line"
        height={500}
      />
    </div>
  );
};

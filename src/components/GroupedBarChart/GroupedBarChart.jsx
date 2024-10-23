import React from "react";
import ReactApexChart from "react-apexcharts";

export const GroupedBarChart = ({ driverResults, selectedDrivers }) => {
  // Extract the data for the selected drivers
  const [driver1, driver2] = selectedDrivers.map((driver) =>
    driverResults.find((result) => result.Pos === driver.ID)
  );

  // Circuit categories
  const categories = [
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
    "SAO",
    "ABU",
  ];

  // Data for the series
  const series = [
    {
      name: driver1.Driver,
      data: categories.map((circuit) => driver1[circuit]),
    },
    {
      name: driver2.Driver,
      data: categories.map((circuit) => driver2[circuit]),
    },
  ];

  // Chart options
  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 10,
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
    },
    stroke: {
      width: 1,
      colors: ["#000"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: categories,
      title: {
        text: "Finishing Position",
      },
    },
    yaxis: {
      title: {
        text: "Circuits",
      },
    },
    legend: {
      position: "top",
    },
  };

  return (
    <div
      id="chart"
      style={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={1000}
      />
    </div>
  );
};

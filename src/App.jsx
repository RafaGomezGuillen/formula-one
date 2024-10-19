import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import CSS
import "./App.css";

// Import JSON
import drivers from "./assets/json/DriverStatistics.json";
import driversStats from "./assets/json/DriverStandings.json";

// Import libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import components
import { NavigationBar } from "./components/Nabvar/NavigationBar";
import { Footer } from "./components/Footer/Footer";

// Import pages
import { Landing } from "./pages/Landing/Landing";

// Import home pages
import { RegulationChanges } from "./pages/home/RegulationChanges/RegulationChanges";
import { SeasonChanges } from "./pages/home/SeasonChanges/SeasonChanges";
import { SeasonIntroduction } from "./pages/home/SeasonIntroduction/SeasonIntroduction";
import { SeasonSummary } from "./pages/home/SeasonSummary/SeasonSummary";
import { Results } from "./pages/Results/Results";

// Import driver pages
import { LandingDrivers } from "./pages/Drivers/LandingDrivers/LandingDrivers";
import { Driver } from "./pages/Drivers/Driver/Driver";

// Import schedule pages
import { LandingSchedule } from "./pages/Schedule/LandingSchedule/LandingSchedule";

function App() {
  const combinedDrivers = drivers.map((driver) => {
    const standings = driversStats.find(
      (standing) => standing.DriverNumber === driver.DriverNumber
    );

    return {
      ...driver,
      ...standings,
    };
  });

  return (
    <BrowserRouter>
      <NavigationBar />
      <main
        style={{
          marginTop: "55px",
          padding: "15px",
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* Import home pages */}
          <Route path="/home/SeasonSummary" element={<SeasonSummary />} />
          <Route
            path="/home/SeasonIntroduction"
            element={<SeasonIntroduction />}
          />
          <Route path="/home/SeasonChanges" element={<SeasonChanges />} />
          <Route
            path="/home/RegulationChanges"
            element={<RegulationChanges />}
          />
          <Route path="/Results" element={<Results />} />

          {/* Import driver pages */}
          <Route path="/Drivers" element={<LandingDrivers />} />
          {combinedDrivers.map((driver) => (
            <Route
              key={driver.Pos}
              path={`/Driver/${driver.Pos}`}
              element={<Driver driver={driver} />}
            />
          ))}

          {/* Import schedule / circuits pages */}
          <Route path="/Schedule" element={<LandingSchedule />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

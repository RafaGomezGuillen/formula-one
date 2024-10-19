import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import CSS
import "./App.css";

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

// Import driver pages 
import { LandingDrivers } from "./pages/Drivers/LandingDrivers/LandingDrivers";

// Import schedule pages
import { LandingSchedule } from "./pages/Schedule/LandingSchedule/LandingSchedule";

function App() {
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

          {/* Import driver pages */}
          <Route
            path="/Drivers"
            element={<LandingDrivers />}
          />

          {/* Import schedule pages */}
          <Route
            path="/Schedule"
            element={<LandingSchedule />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

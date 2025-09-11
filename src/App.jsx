import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Weather from "./pages/weather/Weather";
import Advisory from "./pages/advisory/Advisory";
import Activity from "./pages/Activity/Activity";
import Calendar from "./pages/calendar/Calendar";
import Prices from "./pages/prices/Prices";
import Chat from "./pages/Chat/Chat";
import Benefits from "./pages/benefits/Benefits";
import "./app.css";
import UpperNav from "./pages/upperNav/UpperNav";


function App() {
  return (
    <Router>
      <Navbar />
      <UpperNav/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />   {/* ✅ Default route */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/benefits" element={<Benefits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

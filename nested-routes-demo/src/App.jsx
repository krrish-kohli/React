import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* Global nav */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Parent route */}
        <Route path="dashboard" element={<Dashboard />}>
          {/* Nested/child routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

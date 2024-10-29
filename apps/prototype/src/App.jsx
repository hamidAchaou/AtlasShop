// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Profile from "./pages/Profile";
import RealEstateReel from "./pages/RealEstateReel/RealEstateReel";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, paddingLeft: "240px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/real-estate" element={<RealEstateReel />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

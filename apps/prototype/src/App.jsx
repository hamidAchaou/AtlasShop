// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useMediaQuery, CssBaseline, Box } from "@mui/material";
import theme from "./styles/theme";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Profile from "./pages/Profile";
import RealEstateReel from "./pages/RealEstateReel/RealEstateReel";
import AutoParts from "./pages/AutoParts/AutoParts";

const App = () => {
  // Check if the device is mobile-sized
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
          {/* Sidebar component */}
          <Sidebar />
          
          {/* Main content area */}
          <Box
            component="main"
            sx={{
              flex: 1,
              paddingLeft: isMobile ? 0 : "250px", // Sidebar width on desktop
              paddingBottom: isMobile ? "60px" : 0, // Sidebar height on mobile
              backgroundColor: theme.palette.background.default,
              minHeight: "100vh", // Ensures footer remains at the bottom
            }}
          >
            {/* Define app routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/real-estate" element={<RealEstateReel />} />
              <Route path="/auto-parts" element={<AutoParts />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;

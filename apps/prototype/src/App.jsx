// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useMediaQuery, Box } from "@mui/material";
import theme from "./styles/theme";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Profile from "./pages/Profile";
import RealEstateReel from "./pages/RealEstateReel/RealEstateReel";

const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flex: 1,
              paddingLeft: isMobile ? 0 : "250px", // Sidebar width on desktop
              paddingBottom: isMobile ? "60px" : 0, // Sidebar height on mobile
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/real-estate" element={<RealEstateReel />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;

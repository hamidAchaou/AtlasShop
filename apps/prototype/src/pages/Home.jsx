// src/pages/Home.jsx
import React from "react";
import { Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h1" component="h1">
        Home Page
      </Typography>
      <Typography variant="body1">
        Welcome to the home page! Here you can find various information.
      </Typography>
    </Box>
  );
};

export default Home;

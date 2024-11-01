// src/components/AboutSection.jsx
import React from "react";
import { Typography, Box } from "@mui/material";

const AboutSection = () => (
  <Box
    sx={{
      textAlign: "center",
      p: 3,
      backgroundColor: "background.default",
      borderRadius: 2,
    }}
  >
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1">
      Our platform provides high-quality products, including real estate and
      auto parts. Discover our latest offers and connect with us to know more.
    </Typography>
  </Box>
);

export default AboutSection;

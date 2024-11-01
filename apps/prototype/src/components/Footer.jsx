// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      py: 3,
      textAlign: "center",
      backgroundColor: "grey.900",
      color: "white",
    }}
  >
    <Typography variant="body2">
      © 2024 Your Platform. All Rights Reserved. |{" "}
      <Link href="/privacy" color="inherit">
        Privacy Policy
      </Link>{" "}
      |{" "}
      <Link href="/terms" color="inherit">
        Terms of Service
      </Link>
    </Typography>
  </Box>
);

export default Footer;

// src/pages/Signup.jsx
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles"; // Use styled from MUI
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Custom styles using styled-components
const Root = styled(Container)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #FEA1A1, #FFC3A0)", // Background gradient
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4), // Increased padding for a better layout
  borderRadius: 20,
  textAlign: "center",
  boxShadow: theme.shadows[5],
  background: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: "#FE2C55", // Title color matching the button
  fontWeight: "bold",
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: "#FE2C55",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#e0284c",
  },
}));

const LinkText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: "#FE2C55", // Color for link text
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., API call)
    console.log("Signing up with:", { username, email, password });
  };

  return (
    <Root component="main">
      <PaperStyled>
        <Title variant="h4">Sign Up</Title>
        <form onSubmit={handleSignup}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: 16 }}
                InputProps={{
                  style: {
                    borderRadius: 10,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: 16 }}
                InputProps={{
                  style: {
                    borderRadius: 10,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: 16 }}
                InputProps={{
                  style: {
                    borderRadius: 10,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <ButtonStyled
                type="submit"
                variant="contained"
                fullWidth
                size="large"
              >
                Sign Up
              </ButtonStyled>
            </Grid>
          </Grid>
        </form>
        {/* Link to Login page */}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <LinkText variant="body2">Already have an account? Login</LinkText>
        </Link>
      </PaperStyled>
    </Root>
  );
};

export default Signup;

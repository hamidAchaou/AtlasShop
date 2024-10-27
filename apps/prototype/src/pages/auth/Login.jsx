// src/pages/Login.jsx
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
import { useNavigate } from "react-router-dom"; // Import useNavigate

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Logging in with:", { email, password });

    // Example: On successful login, navigate to the home page or dashboard
    // navigate("/dashboard"); // Uncomment this after implementing login logic
  };

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <Root component="main">
      <PaperStyled>
        <Title variant="h4">Login</Title>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email/Username"
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
                Login
              </ButtonStyled>
            </Grid>
          </Grid>
        </form>
        <LinkText variant="body2" onClick={handleSignUpRedirect}>
          Don't have an account? Sign up
        </LinkText>
      </PaperStyled>
    </Root>
  );
};

export default Login;

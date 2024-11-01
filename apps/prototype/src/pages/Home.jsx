// src/pages/Home.jsx
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ProductReels from "../components/ProductReels";
import ReelSection from "../components/ReelSection";
import ContactForm from "../components/ContactForm";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Reel Section for Main Content (Instagram-like Video Reels) */}
      <ReelSection title="Real Estate Reels" />
      <ReelSection title="Auto Parts Reels" />

      {/* Product Reels Section */}
      <Box sx={{ my: 4 }}>
        <ProductReels category="Real Estate" />
        <ProductReels category="Auto Parts" />
      </Box>

      {/* About Section */}
      <Box sx={{ my: 4 }}>
        <AboutSection />
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ my: 4 }}>
        <ContactForm />
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Home;

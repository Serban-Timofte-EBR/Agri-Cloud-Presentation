import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const PublicPartnersHero: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #224522 30%, #113211 90%)",
        color: "white",
        py: { xs: 8, md: 12 },
        mb: 8,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Hero Text Section */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            maxWidth: { md: "60%" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mb: 3, lineHeight: 1.2 }}
            >
              Sustainable and Data-Driven Agricultural
              Development
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: "#e0e0e0" }}>
              Leverage cutting-edge analytics to drive sustainable agricultural
              policies, enhance economic growth, and build resilient farming
              communities. We implement data-driven strategies
              that improve productivity, mitigate risks, and ensure long-term
              soil health.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#FFEB3B",
                color: "#224522",
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "#FFD700" },
                fontWeight: "bold",
              }}
            >
              Scroll to Get Started
            </Button>
          </motion.div>
        </Box>
      </Container>

      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 60%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default PublicPartnersHero;

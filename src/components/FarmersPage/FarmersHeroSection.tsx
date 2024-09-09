import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { keyframes } from "@emotion/react";

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedBackgroundSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background:
          "linear-gradient(270deg, #a8e063, #56ab2f, #1976d2, #4caf50)",
        backgroundSize: "1200% 1200%",
        animation: `${backgroundAnimation} 30s ease infinite`,
        color: "#fff",
        position: "relative",
        padding: 4,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{ zIndex: 2, position: "relative" }}>
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
            letterSpacing: 1.2,
          }}
        >
          DigIT: The New Cloud for Agriculture
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Empowering Modern Farming with AI, IoT, and Data-Driven Insights
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            backgroundColor: "#FF9800",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#e68900",
            },
            borderRadius: 50,
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default AnimatedBackgroundSection;

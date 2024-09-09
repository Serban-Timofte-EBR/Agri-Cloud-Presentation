import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://www.agrirs.co.uk/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXF2UWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d74a2c1ac2f7b21112d3805d64c0dcb98fc57c59/iStock-1346294867.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: 3,
          borderRadius: 1,
          display: "inline-block",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 2,
            gap: 2,
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: "italic",
              fontSize: "1rem",
              padding: "6px 12px",
              "&:hover": {
                textDecoration: "underline", 
                backgroundColor: "transparent",
              },
            }}
          >
            For Private Entities
          </Button>
          <Button
            variant="text"
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: "italic",
              fontSize: "1rem",
              padding: "6px 12px",
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "transparent",
              },
            }}
          >
            For Public Entities
          </Button>
        </Box>

        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 1, color: "black" }}
        >
          DigIT: The New Cloud
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 3, color: "black" }}
        >
          for Agriculture
        </Typography>

        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;

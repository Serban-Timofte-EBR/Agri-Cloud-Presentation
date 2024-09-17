// src/components/ContactPage.tsx
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PreRegisterSection from "../components/PreRegisterSection";

const ContactPage: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        background: "linear-gradient(135deg, #f0f2f5, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          color: "#2E7D32",
        }}
      >
        Contact Us
      </Typography>
      <Divider sx={{ mb: 6 }} />

      <Grid container spacing={4} justifyContent="center">
        {/* Pre-Register Section */}
        <Grid item xs={12} md={6}>
          <PreRegisterSection />
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #ffffff, #e8eaf6)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#2E7D32",
              }}
            >
              Contact Information
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ color: "#FF7043", mr: 2 }} />
              <Typography variant="body1">
                contact@ebr-net.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ color: "#FF7043", mr: 2 }} />
              <Typography variant="body1">+40 735 861 201</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOnIcon sx={{ color: "#FF7043", mr: 2 }} />
              <Typography variant="body1">
                Str. Teiului, Nr. 12
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;

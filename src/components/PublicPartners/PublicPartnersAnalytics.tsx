// src/components/PublicPartnersAnalytics.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import NatureOutlinedIcon from "@mui/icons-material/NatureOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const analyticsData = [
  {
    icon: <InsightsOutlinedIcon sx={{ fontSize: 60, color: "#1b5e20" }} />,
    title: "State of Agriculture",
    description:
      "Gain a comprehensive overview of the agricultural landscape with metrics on crop yield trends, resource utilization, and economic impact across regions.",
  },
  {
    icon: <NatureOutlinedIcon sx={{ fontSize: 60, color: "#1b5e20" }} />,
    title: "Soil Health Monitoring",
    description:
      "Explore 'Parcel Passport', a detailed profile of each parcel that includes soil quality, crop history, and suitability for future cultivation.",
  },
  {
    icon: <SecurityOutlinedIcon sx={{ fontSize: 60, color: "#1b5e20" }} />,
    title: "Risk Assessment and Mitigation",
    description:
      "Identify and assess risks such as climate variability, pest outbreaks, and disease threats, enabling data-driven strategies to mitigate potential impacts.",
  },
];

const PublicPartnersAnalytics: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #f0f4f8 30%, #e0e5ec 100%)", // Soft gradient background
        py: 10,
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "150px",
          height: "150px",
          backgroundColor: "#aed581",
          borderRadius: "50%",
          opacity: 0.3,
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "200px",
          height: "200px",
          backgroundColor: "#80cbc4",
          borderRadius: "50%",
          opacity: 0.3,
          zIndex: 0,
          filter: "blur(60px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2, color: "#2E7D32" }}
          >
            Advanced Analytics for Informed Decision-Making
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#555", maxWidth: "700px", mx: "auto" }}
          >
            Harness the power of data to drive impactful agricultural policies
            and initiatives. Our platform provides key insights into the state
            of agriculture, soil health, and risk management.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {analyticsData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ height: "100%" }} // Ensures full height for each card
              >
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "20px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    backgroundColor: "white", // Card background color
                    height: "100%", // Makes all cards have the same height
                    transition: "all 0.3s ease",
                    position: "relative",
                    "&:before": {
                      content: "''",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
                      zIndex: -1,
                      borderRadius: "20px",
                    },
                    "&:hover": {
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)", 
                      transform: "translateY(-5px)",
                      "&:before": {
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 3 }}>{item.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600", mb: 2, color: "#2E7D32" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#333", lineHeight: 1.7, fontSize: "1rem" }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PublicPartnersAnalytics;

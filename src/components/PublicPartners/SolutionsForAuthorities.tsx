import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import InsightsIcon from "@mui/icons-material/Insights";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import GavelIcon from "@mui/icons-material/Gavel";

const SolutionsForAuthorities: React.FC = () => {
  const solutions = [
    {
      icon: <PublicIcon sx={{ fontSize: 50, color: "#4CAF50" }} />,
      title: "Smart Agricultural Planning",
      description:
        "Use real-time data and analytics to create informed strategies for sustainable growth, ensuring your farm's success and food security.",
      callout: "Data-backed strategies for better yields.",
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 50, color: "#FF7043" }} />,
      title: "Personalized Farm Insights",
      description:
        "Gain valuable insights into soil health, water management, and crop performance tailored to your region to address specific challenges.",
      callout: "Custom insights to boost farm productivity.",
    },
    {
      icon: <CloudOutlinedIcon sx={{ fontSize: 50, color: "#3F51B5" }} />,
      title: "Collaborative Farming Network",
      description:
        "Join a collaborative platform that connects farmers, agricultural experts, and stakeholders to share knowledge and resources effectively.",
      callout: "Stronger together through shared knowledge.",
    },
    {
      icon: <GavelIcon sx={{ fontSize: 50, color: "#FFC107" }} />,
      title: "Guidance on Agricultural Standards",
      description:
        "Stay updated on agricultural standards and best practices with automated guidance and easy-to-follow recommendations.",
      callout: "Make compliance easy and hassle-free.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        background: "linear-gradient(135deg, #ffffff, #f7f8fa)",
        borderRadius: 3,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
        mt: 6,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: "bold",
          color: "#2E7D32",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        Tailored Possibilities
      </Typography>
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                p: 3,
                background: "linear-gradient(135deg, #ffffff, #e8f5e9)",
                borderRadius: 3,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                },
                mb: 4,
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  {solution.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2E7D32", mb: 1 }}
                >
                  {solution.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", mb: 2, minHeight: "60px" }}
                >
                  {solution.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", fontStyle: "italic" }}
                >
                  {solution.callout}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SolutionsForAuthorities;

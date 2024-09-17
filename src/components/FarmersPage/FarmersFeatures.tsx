import React from "react";
import { Box, Grid, Typography, Card, CardContent, Icon } from "@mui/material";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

const FarmersFeatures: React.FC = () => {
  const features = [
    {
      icon: (
        <AssignmentTurnedInOutlinedIcon
          sx={{ fontSize: 50, color: "#4CAF50" }}
        />
      ),
      title: "Task Management",
      description:
        "Digitize daily tasks for better tracking, including scheduling, progress updates, and status changes. Link tasks directly to related documents and inventory for seamless management.",
      background: "linear-gradient(135deg, #a8e063 30%, #56ab2f 100%)",
    },
    {
      icon: <DescriptionOutlinedIcon sx={{ fontSize: 50, color: "#FF9800" }} />,
      title: "Automated Document Creation",
      description:
        "Generate and manage documents automatically from tasks and actions. Save time and reduce paperwork by streamlining the documentation process.",
      background: "linear-gradient(135deg, #f6d365 30%, #fda085 100%)",
    },
    {
      icon: <Inventory2OutlinedIcon sx={{ fontSize: 50, color: "#3F51B5" }} />,
      title: "Inventory Control",
      description:
        "Keep track of all resources with a live inventory system. Get insights into usage, restocking needs, and ensure nothing is ever out of stock.",
      background: "linear-gradient(135deg, #667eea 30%, #764ba2 100%)",
    },
    {
      icon: <BarChartOutlinedIcon sx={{ fontSize: 50, color: "#E91E63" }} />,
      title: "Performance Analytics",
      description:
        "Analyze farm performance and resources with detailed reports and dashboards. Use data-driven insights to optimize farming operations and reduce costs.",
      background: "linear-gradient(135deg, #f857a6 30%, #ff5858 100%)",
    },
  ];

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          textAlign: "center",
          fontWeight: "bold",
          color: "#2F4F4F",
        }}
      >
        Empower Your Farm with Advanced Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                p: 3,
                background: feature.background,
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Icon sx={{ mb: 2 }}>{feature.icon}</Icon>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FarmersFeatures;

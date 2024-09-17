import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Logo from "../../assets/logo.png";

const claimData = [
  {
    title: "Less Bureaucracy, More Proactivity",
    description:
      "Automate administrative tasks to reduce paperwork and enable proactive decision-making for better farm management.",
  },
  {
    title: "Better Visibility Over Processes",
    description:
      "Real-time insights into all farm operations help you oversee and manage resources more effectively and efficiently.",
  },
  {
    title: "Accurate Business History for Partners",
    description:
      "Build trust with partners by maintaining a clear and accurate record of your farm's business activities.",
  },
  {
    title: "Data-Driven Simulations for Planning",
    description:
      "Use simulations based on farm data to predict outcomes and strategize future farming activities with reduced risk.",
  },
  {
    title: "Optimize Operations by Identifying Inefficiencies",
    description:
      "Leverage analytics to spot and correct inefficient processes, optimizing resource use and reducing costs.",
  },
];

const DigitiGoalsFarmers: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#f4f5f7" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          mb: 8,
          textAlign: "center",
          fontWeight: "bold",
          color: "#2E7D32",
        }}
      >
        DigIT Goals for Farmers
      </Typography>
      <Divider sx={{ mb: 6, borderColor: "#D3D3D3" }} />

      {/* Claims Grid */}
      <Grid container spacing={4} justifyContent="center">
        {claimData.map((claim, index) => (
          <Grid item xs={12} md={5} key={index}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card
                sx={{
                  p: 3,
                  background: "linear-gradient(135deg, #ffffff, #f7f9fc)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  },
                  borderTop: `4px solid ${
                    index % 2 === 0 ? "#4CAF50" : "#FF9800"
                  }`,
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        backgroundColor: `${
                          index % 2 === 0 ? "#4CAF50" : "#FF9800"
                        }`,
                        mr: 2,
                      }}
                    >
                      <CheckCircleOutlineIcon
                        sx={{
                          fontSize: 30,
                          color: "#fff",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#333" }}
                    >
                      {claim.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", lineHeight: 1.7 }}
                  >
                    {claim.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DigitiGoalsFarmers;

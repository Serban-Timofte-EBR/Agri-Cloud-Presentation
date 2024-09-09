import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Logo from "../assets/logo.png";

const PerformanceClaims: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          textAlign: "center",
          fontWeight: "bold",
          color: "#2E7D32",
          letterSpacing: 1,
        }}
      >
        Our Core Focus
      </Typography>
      <Divider sx={{ mb: 6 }} />

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #a8e063 30%, #56ab2f 100%)",
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
              <AssignmentTurnedInOutlinedIcon
                sx={{ fontSize: 50, color: "#fff", mb: 2 }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
              >
                Digitizing the Administrative Processes of the Farm
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", lineHeight: 1.6 }}
              >
                Transform traditional farm management with our digital platform,
                enabling better organization, transparency, and efficiency in
                handling all farm-related administrative tasks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #667eea 30%, #764ba2 100%)",
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
              <AnalyticsOutlinedIcon
                sx={{ fontSize: 50, color: "#fff", mb: 2 }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
              >
                Data-Driven Insights from Your Farm
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", lineHeight: 1.6 }}
              >
                Leverage advanced analytics to gain meaningful insights from
                your farm data. Optimize your operations with real-time,
                data-backed recommendations.
              </Typography>
              <br />
              <br />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
              Our Key Performance Claims
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CheckCircleOutlineIcon sx={{ color: "#4CAF50", mr: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Data Accuracy
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, pl: 4 }}>
              Ensure reliable and accurate data collection with advanced
              validation algorithms and redundancy protocols.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CheckCircleOutlineIcon sx={{ color: "#4CAF50", mr: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Business Sustainability
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, pl: 4 }}>
              Optimize processes and manage resources efficiently to enhance
              sustainability and reduce waste.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CheckCircleOutlineIcon sx={{ color: "#4CAF50", mr: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Power Efficiency
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, pl: 4 }}>
              IoT devices are designed for ultra-low power consumption, ensuring
              continuous operation with minimal maintenance.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CheckCircleOutlineIcon sx={{ color: "#4CAF50", mr: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Real-Time Data
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, pl: 4 }}>
              Real-time data transmission for timely decision-making, even in
              areas with limited connectivity.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CheckCircleOutlineIcon sx={{ color: "#4CAF50", mr: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                High Sensitivity
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, pl: 4 }}>
              High-accuracy sensors capture minute changes in environmental
              conditions, enabling precise farming.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="DigIT Logo"
              sx={{
                maxWidth: "80%",
                height: "auto",
                position: "relative",
                "&:hover": {
                  animation: "lightSweep 1s forwards", 
                },
                "@keyframes lightSweep": {
                  "0%": {
                    filter: "brightness(0.8)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.8) 100%)",
                    backgroundSize: "300% 300%",
                    backgroundPosition: "100% 0%",
                  },
                  "100%": {
                    filter: "brightness(1.2)", 
                    backgroundPosition: "0% 100%",
                  },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PerformanceClaims;

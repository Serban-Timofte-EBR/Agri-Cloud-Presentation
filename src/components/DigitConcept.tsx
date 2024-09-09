import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Icon,
  Divider,
} from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { useInView } from "react-intersection-observer";

const DigitConcept: React.FC = () => {
  const { ref: farmerRef, inView: inViewFarmer } = useInView({
    triggerOnce: false,
  });
  const { ref: publicAdminRef, inView: inViewPublicAdmin } = useInView({
    triggerOnce: false,
  });
  const { ref: cloudRef, inView: inViewCloud } = useInView({
    triggerOnce: false,
  });
  const { ref: aiRef, inView: inViewAI } = useInView({ triggerOnce: false });
  const { ref: iotRef, inView: inViewIoT } = useInView({ triggerOnce: false });

  return (
    <Box
      sx={{
        py: 8,
        px: 4,
      }}
    >
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
        The DigIT Concept
      </Typography>

      <Divider sx={{ mb: 8, borderColor: "#ddd" }} />

      <Grid container spacing={6}>
        {/* For Farmers */}
        <Grid item xs={12} md={6}>
          <Card
            ref={farmerRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(76, 175, 80, 0.2)",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              opacity: inViewFarmer ? 1 : 0,
              transform: inViewFarmer ? "none" : "translateY(50px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
              },
            }}
          >
            <Icon
              component={AgricultureOutlinedIcon}
              sx={{ fontSize: 60, color: "#4CAF50", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                For Farmers
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                Enhance farming operations with cloud-based solutions for task
                management, inventory control, and document handling. Empower
                business owners to focus on core operations while reducing
                bureaucratic tasks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            ref={publicAdminRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(76, 175, 80, 0.2)",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              opacity: inViewPublicAdmin ? 1 : 0,
              transform: inViewPublicAdmin ? "none" : "translateY(50px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
              },
            }}
          >
            <Icon
              component={SecurityOutlinedIcon}
              sx={{ fontSize: 60, color: "#F44336", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                For Public Administration
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                Leverage AI, IoT, and advanced analytics to enhance national
                agricultural security. Generate data-driven reports for
                production estimasions and soil health score.
              </Typography>
              <br />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Core Benefits */}
      <Grid container spacing={6} sx={{ mt: 6 }}>
        {/* Cloud Computing */}
        <Grid item xs={12} md={4}>
          <Card
            ref={cloudRef}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(76, 175, 80, 0.2)", // Subtle green shadow
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              opacity: inViewCloud ? 1 : 0,
              transform: inViewCloud ? "none" : "translateY(50px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)", // Slightly stronger shadow on hover
              },
            }}
          >
            <Icon
              component={CloudOutlinedIcon}
              sx={{ fontSize: 60, color: "#1976D2", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Cloud Computing
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Scalability, secure data storage, and advanced analytics for
                decision-making.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* AI and Predictive Analytics */}
        <Grid item xs={12} md={4}>
          <Card
            ref={aiRef}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(76, 175, 80, 0.2)",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              opacity: inViewAI ? 1 : 0,
              transform: inViewAI ? "none" : "translateY(50px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
              },
            }}
          >
            <Icon
              component={InsightsOutlinedIcon}
              sx={{ fontSize: 60, color: "#9C27B0", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                AI & Predictive Analytics
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Optimize soil health, predict crop yields, and manage resources
                efficiently.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* IoT Integration */}
        <Grid item xs={12} md={4}>
          <Card
            ref={aiRef}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(76, 175, 80, 0.2)",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              opacity: inViewAI ? 1 : 0,
              transform: inViewAI ? "none" : "translateY(50px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
              },
            }}
          >
            <Icon
              component={SecurityOutlinedIcon}
              sx={{ fontSize: 60, color: "#FF9800", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                IoT Integration
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Real-time data collection, environmental monitoring, and
                efficient resource management.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DigitConcept;

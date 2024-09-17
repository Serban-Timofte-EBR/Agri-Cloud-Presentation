// src/components/RegionalAgriculturalInsights.tsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  SelectChangeEvent,
} from "@mui/material";
import { Bar, Line } from "react-chartjs-2";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip as LeafletTooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { LatLngExpression } from "leaflet"; // Import the LatLngExpression type
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

type RegionData = {
  [key: string]: {
    cropHealth: number[];
    waterUsage: number[];
    pestOutbreaks: number[];
    economicImpact: number[];
    co2Emissions: number[];
    coordinates: LatLngExpression; // Use LatLngExpression type here
  };
};

const regionData: RegionData = {
  Moldova: {
    cropHealth: [75, 85, 60, 90],
    waterUsage: [30, 50, 45, 60],
    pestOutbreaks: [10, 20, 15, 30],
    economicImpact: [150, 200, 170, 220],
    co2Emissions: [5.1, 4.9, 5.3, 5.0, 5.2, 5.4],
    coordinates: [47.1585, 27.6014], // Coordinates for Moldova
  },
  Oltenia: {
    cropHealth: [65, 70, 55, 80],
    waterUsage: [40, 55, 50, 70],
    pestOutbreaks: [15, 25, 20, 35],
    economicImpact: [130, 180, 160, 210],
    co2Emissions: [4.8, 5.0, 4.9, 5.1, 5.3, 5.2],
    coordinates: [44.3186, 23.8009], // Coordinates for Oltenia
  },
  Ardeal: {
    cropHealth: [85, 95, 70, 75],
    waterUsage: [20, 30, 40, 60],
    pestOutbreaks: [5, 15, 10, 20],
    economicImpact: [200, 240, 180, 250],
    co2Emissions: [5.5, 5.7, 5.6, 5.8, 5.9, 5.6],
    coordinates: [46.7704, 23.5914], // Coordinates for Ardeal
  },
};

const RegionalAgriculturalInsights: React.FC = () => {
  const [selectedRegion, setSelectedRegion] =
    useState<keyof typeof regionData>("Moldova"); // Restrict type to keys of regionData

  const regions = Object.keys(regionData) as (keyof typeof regionData)[];

  const handleRegionChange = (
    event: SelectChangeEvent<keyof typeof regionData>
  ) => {
    setSelectedRegion(event.target.value as keyof typeof regionData);
  };

  const cropHealthData = {
    labels: ["Wheat", "Corn", "Barley", "Soy"],
    datasets: [
      {
        label: "Crop Health (%)",
        data: regionData[selectedRegion].cropHealth,
        backgroundColor: "rgba(75,192,192,0.5)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const waterUsageData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Water Usage (liters)",
        data: regionData[selectedRegion].waterUsage,
        backgroundColor: "rgba(255,159,64,0.5)",
        borderColor: "rgba(255,159,64,1)",
        borderWidth: 1,
      },
    ],
  };

  const co2EmissionsData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "CO2 Emissions (tons)",
        data: regionData[selectedRegion].co2Emissions,
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.1,
      },
    ],
  };

  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        background: "linear-gradient(135deg, #f0f2f5, #ffffff)",
        borderRadius: 3,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
          color: "#2E7D32",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        Regional Agricultural Insights Dashboard
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        {/* Left Column: Combo Boxes and Charts */}
        <Grid item xs={12} md={6}>
          {/* Region Selection */}
          <Box sx={{ mb: 4 }}>
            <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
              <InputLabel>Select a Region</InputLabel>
              <Select
                value={selectedRegion}
                onChange={handleRegionChange}
                label="Select a Region"
                sx={{
                  background: "white",
                  borderRadius: 2,
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 6px 12px rgba(0, 128, 0, 0.2)",
                  },
                }}
              >
                {regions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Crop Health Analysis Chart */}
          <Card
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
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
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2E7D32", mb: 2 }}
              >
                Crop Health Analysis
              </Typography>
              <Bar data={cropHealthData} />
            </CardContent>
          </Card>

          {/* Water Usage Trends Chart */}
          <Card
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #ffffff, #e8eaf6)",
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
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2E7D32", mb: 2 }}
              >
                Water Usage Trends
              </Typography>
              <Bar data={waterUsageData} />
            </CardContent>
          </Card>

          {/* CO2 Emissions Trends Chart */}
          <Card
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #ffffff, #ffebee)",
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
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2E7D32", mb: 2 }}
              >
                CO2 Emissions from Agriculture
              </Typography>
              <Line data={co2EmissionsData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Interactive Heat Map */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "700px",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              mb: 4,
            }}
          >
            <MapContainer
              center={[45.9432, 24.9668] as LatLngExpression} // Center of Romania
              zoom={6}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {Object.keys(regionData).map((region) => (
                <CircleMarker
                  key={region}
                  center={
                    regionData[region as keyof typeof regionData].coordinates
                  }
                  radius={12}
                  color={selectedRegion === region ? "#FF6347" : "#007BFF"}
                  fillColor={selectedRegion === region ? "#FF6347" : "#007BFF"}
                  fillOpacity={0.6}
                  stroke={selectedRegion === region} // Highlight selected region with a dashed stroke
                  pathOptions={{ dashArray: "5, 10" }}
                >
                  <LeafletTooltip
                    direction="right"
                    offset={[-8, -2]}
                    opacity={1}
                    permanent
                  >
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {region}
                    </Typography>
                  </LeafletTooltip>
                </CircleMarker>
              ))}
            </MapContainer>
          </Box>

          {/* Predictive Insights */}
          <Box
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#2E7D32",
                mb: 2,
                textAlign: "center",
              }}
            >
              Predictive Insights for {selectedRegion}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", textAlign: "center" }}
            >
              Based on current data, the platform recommends adjusting
              irrigation levels to prevent potential water stress and applying
              pest management strategies to mitigate predicted outbreaks.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegionalAgriculturalInsights;

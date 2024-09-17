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
  Polygon,
  Tooltip as LeafletTooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
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
import GaugeChart from "react-gauge-chart";
import Disclaimer from "../Disclaimer";

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
    coordinates: LatLngExpression[];
  };
};

const regionData: RegionData = {
  Moldova: {
    cropHealth: [75, 85, 60, 90],
    waterUsage: [30, 50, 45, 60],
    pestOutbreaks: [10, 20, 15, 30],
    economicImpact: [150, 200, 170, 220],
    co2Emissions: [5.1, 4.9, 5.3, 5.0, 5.2, 5.4],
    coordinates: [
      [48.467, 26.902],
      [46.722, 28.233],
      [45.967, 28.946],
      [45.453, 28.167],
      [45.824, 27.009],
      [46.644, 26.828],
      [47.424, 26.598],
      [48.467, 26.902],
    ], // Polygon for Moldova
  },
  Oltenia: {
    cropHealth: [65, 70, 55, 80],
    waterUsage: [40, 55, 50, 70],
    pestOutbreaks: [15, 25, 20, 35],
    economicImpact: [130, 180, 160, 210],
    co2Emissions: [4.8, 5.0, 4.9, 5.1, 5.3, 5.2],
    coordinates: [
      [44.872, 23.181],
      [44.676, 22.614],
      [44.292, 23.034],
      [44.498, 23.834],
      [44.723, 24.262],
      [44.872, 23.181],
    ], // Polygon for Oltenia
  },
  Ardeal: {
    cropHealth: [85, 95, 70, 75],
    waterUsage: [20, 30, 40, 60],
    pestOutbreaks: [5, 15, 10, 20],
    economicImpact: [200, 240, 180, 250],
    co2Emissions: [5.5, 5.7, 5.6, 5.8, 5.9, 5.6],
    coordinates: [
      [46.342, 23.057],
      [47.543, 23.997],
      [46.879, 24.662],
      [45.718, 24.477],
      [46.342, 23.057],
    ], // Polygon for Ardeal
  },
};

const gaugeOptions = {
  nrOfLevels: 30,
  colors: ["#00e396", "#feb019", "#ff4560"],
  arcWidth: 0.3,
  percent: 0.75, 
  needleColor: "#464A4F",
};

const getRiskLevelPercentage = (region: keyof typeof regionData) => {
  return Math.random(); // Random value for demonstration
};

const DynamicRiskAssessmentGauge: React.FC<{
  selectedRegion: keyof typeof regionData;
}> = ({ selectedRegion }) => {
  return (
    <GaugeChart
      id="risk-gauge-chart"
      nrOfLevels={gaugeOptions.nrOfLevels}
      colors={gaugeOptions.colors}
      arcWidth={gaugeOptions.arcWidth}
      percent={getRiskLevelPercentage(selectedRegion)}
      needleColor={gaugeOptions.needleColor}
      textColor="#464A4F"
    />
  );
};

const RegionalAgriculturalInsights: React.FC = () => {
  const [selectedRegion, setSelectedRegion] =
    useState<keyof typeof regionData>("Moldova");

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

  const MapFocus = ({ region }: { region: keyof typeof regionData }) => {
    const map = useMap();

    // Convert the coordinates array to a LatLngBounds
    const bounds = L.latLngBounds(
      regionData[region].coordinates as [number, number][]
    );

    map.fitBounds(bounds);
    return null;
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
              height: "700px", // Match left column height
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
                <Polygon
                  key={region}
                  pathOptions={{
                    color: selectedRegion === region ? "#FF6347" : "#007BFF",
                    fillColor:
                      selectedRegion === region ? "#FF6347" : "#007BFF",
                    fillOpacity: 0.3,
                    weight: selectedRegion === region ? 3 : 1,
                  }}
                  positions={
                    regionData[region as keyof typeof regionData].coordinates
                  }
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
                </Polygon>
              ))}
              <MapFocus region={selectedRegion} />
            </MapContainer>
          </Box>

          {/* Predictive Insights */}
          <Box
            sx={{
              p: 4,
              background: "linear-gradient(135deg, #ffffff, #f7f7f7)",
              borderRadius: 4,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              mt: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#2E7D32",
                mb: 2,
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Predictive Insights for {selectedRegion}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", mb: 2, maxWidth: "80%" }}
            >
              Based on current data, the platform recommends adjusting
              irrigation levels to prevent potential water stress and applying
              pest management strategies to mitigate predicted outbreaks. Ensure
              soil nutrient balance to optimize growth and enhance resilience
              against weather changes.
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", maxWidth: "80%" }}>
              Future forecast analysis indicates a need for diversified crop
              planning to balance economic growth and environmental
              sustainability in the coming years. Consider implementing
              sustainable farming practices and advanced monitoring systems to
              further enhance productivity.
            </Typography>
          </Box>

          {/* Risk Assessment Gauge */}
          {/* Risk Assessment Gauge */}
          <Card
            sx={{
              p: 3,
              background: "#ffffff",
              borderRadius: 3,
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
              },
              height: "420px", 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 4,
              mx: 2, 
              overflowY: "auto",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                width: "100%", // Ensure the content takes full width
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#2E7D32", // Updated color for better visibility
                  mb: 2,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                Risk Assessment Gauge
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DynamicRiskAssessmentGauge selectedRegion={selectedRegion} />
              </Box>

              {/* Contextual Information */}
              <Typography
                variant="body2"
                sx={{
                  color: "#333", // Darker color for better visibility
                  mt: 3,
                  px: 2,
                  maxWidth: "95%", // Ensures the text doesn't touch the card edges
                  lineHeight: 1.5,
                }}
              >
                The Risk Assessment Gauge provides a real-time evaluation of
                potential risks associated with farming activities in{" "}
                {selectedRegion}. It includes factors like weather conditions,
                soil health, pest outbreaks, and water availability, guiding you
                to take timely actions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Disclaimer />
    </Box>
  );
};

export default RegionalAgriculturalInsights;

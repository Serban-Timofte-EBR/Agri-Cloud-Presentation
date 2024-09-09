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
  SelectChangeEvent,
  Divider,
} from "@mui/material";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const DemoParcelDashboard: React.FC = () => {
  const [selectedParcel, setSelectedParcel] = useState<string>("Parcel A");
  const [selectedSubstance, setSelectedSubstance] = useState<string>("");

  const parcels = [
    {
      name: "Parcel A",
      crop: "Wheat",
      tasks: [
        "Plowed with disc, 10 September 2023",
        "Sprayed with herbicide, 15 September 2023",
        "Fertilized with NPK, 20 September 2023",
      ],
      healthData: [70, 85, 60, 80, 65, 75],
      soilQuality: {
        nitrogen: "Optimal",
        phosphorus: "Low",
        potassium: "High",
        pH: "6.5",
        moisture: "Moderate",
      },
      weatherForecast: "Next 3 Days: Rain Expected",
      yieldPrediction:
        "Estimated Yield: 25% Increase (compared to last season)",
      actionableInsights: "Apply phosphorus-rich fertilizer to improve yield.",
    },
    {
      name: "Parcel B",
      crop: "Corn",
      tasks: [
        "Fertilized with nitrogen, 5 September 2023",
        "Watered via irrigation, 12 September 2023",
        "Sprayed with insecticide, 20 September 2023",
      ],
      healthData: [60, 75, 80, 70, 85, 65],
      soilQuality: {
        nitrogen: "High",
        phosphorus: "Moderate",
        potassium: "Low",
        pH: "7.0",
        moisture: "Low",
      },
      weatherForecast: "Next 3 Days: Sunny with mild temperatures",
      yieldPrediction:
        "Estimated Yield: 15% Decrease (compared to last season)",
      actionableInsights: "Increase irrigation to improve moisture levels.",
    },
    {
      name: "Parcel C",
      crop: "Barley",
      tasks: [
        "Sowed, 20 August 2023",
        "Harvested, 18 September 2023",
        "Applied lime to adjust pH, 25 September 2023",
      ],
      healthData: [80, 70, 75, 85, 60, 80],
      soilQuality: {
        nitrogen: "Low",
        phosphorus: "High",
        potassium: "Moderate",
        pH: "6.8",
        moisture: "High",
      },
      weatherForecast: "Next 3 Days: Heavy Rainfall Expected",
      yieldPrediction: "Estimated Yield: Stable (same as last season)",
      actionableInsights: "Ensure proper drainage to avoid waterlogging.",
    },
  ];

  const substances = ["None", "Urea", "Triple Super Phosphate", "Potash", "Glyphosate", "Compost"];

  const [parcelHealthData, setParcelHealthData] = useState({
    labels: [
      "Nitrates",
      "Nitrites",
      "Moisture",
      "pH",
      "Phosphorus",
      "Potassium",
    ],
    datasets: [
      {
        label: "Soil Health Score",
        data: parcels[0].healthData,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });

  const handleParcelChange = (event: SelectChangeEvent<string>) => {
    const selected = event.target.value as string;
    setSelectedParcel(selected);

    const selectedParcel = parcels.find((parcel) => parcel.name === selected);

    if (selectedParcel) {
      setParcelHealthData((prevData) => ({
        ...prevData,
        datasets: [
          { ...prevData.datasets[0], data: selectedParcel.healthData },
        ],
      }));
    }
  };

  const handleSubstanceChange = (event: SelectChangeEvent<string>) => {
  const substance = event.target.value as string;
  setSelectedSubstance(substance);

  let updatedData = [...parcelHealthData.datasets[0].data];

  switch (substance) {
    case "None":
      updatedData =
        parcels.find((parcel) => parcel.name === selectedParcel)?.healthData ||
        [];
      break;
    case "Urea":
      // Increase nitrogen significantly, small decrease in other values
      updatedData = updatedData.map((value, index) =>
        index === 0 ? value * 1.2 : value * 0.95
      );
      break;
    case "Triple Super Phosphate":
      // Increase phosphorus significantly, small decrease in nitrogen
      updatedData = updatedData.map((value, index) =>
        index === 4 ? value * 1.3 : value * 0.9
      );
      break;
    case "Potash":
      // Increase potassium, stabilize moisture
      updatedData = updatedData.map((value, index) =>
        index === 5 ? value * 1.4 : index === 2 ? value * 1.05 : value
      );
      break;
    case "Glyphosate":
      // Decrease nitrogen and potassium, slightly lower overall soil health
      updatedData = updatedData.map((value, index) =>
        index === 0 || index === 5 ? value * 0.8 : value * 0.95
      );
      break;
    case "Compost":
      // Improve overall soil health slightly
      updatedData = updatedData.map((value) => value * 1.1);
      break;
    default:
      // Reset to original parcel data
      updatedData =
        parcels.find((parcel) => parcel.name === selectedParcel)?.healthData ||
        [];
  }

  setParcelHealthData((prevData) => ({
    ...prevData,
    datasets: [{ ...prevData.datasets[0], data: updatedData }],
  }));
};

  const selectedParcelData = parcels.find(
    (parcel) => parcel.name === selectedParcel
  );

  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        background:
          'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://www.example.com/farm-background.jpg")', // Use a relevant image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
          color: "#1C2833", 
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        Parcel Passport Demo
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
            <InputLabel>Select a Parcel</InputLabel>
            <Select
              value={selectedParcel}
              onChange={handleParcelChange}
              label="Select a Parcel"
              sx={{
                background: "white",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 128, 0, 0.2)",
                },
              }}
            >
              {parcels.map((parcel) => (
                <MenuItem key={parcel.name} value={parcel.name}>
                  {parcel.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Card
            sx={{
              background: "linear-gradient(135deg, #a2d5c6 30%, #07689f 100%)",
              p: 3,
              borderRadius: 3,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f0f0f0",
                  textAlign: "center",
                }}
              >
                🌾 Crop Information
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#f0f0f0", mb: 2, textAlign: "center" }}
              >
                {selectedParcelData?.crop}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f0f0f0",
                  mt: 2,
                  textAlign: "center",
                }}
              >
                ✅ Completed Tasks
              </Typography>
              {selectedParcelData?.tasks.map((task, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ color: "#f0f0f0", textAlign: "center" }}
                >
                  {task}
                </Typography>
              ))}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f0f0f0",
                  mt: 2,
                  textAlign: "center",
                }}
              >
                🧪 Soil Quality Metrics
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#f0f0f0", textAlign: "center" }}
              >
                Nitrogen: {selectedParcelData?.soilQuality.nitrogen} | Phosphorus: {selectedParcelData?.soilQuality.phosphorus} | Potassium: {selectedParcelData?.soilQuality.potassium}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f0f0f0",
                  mt: 2,
                  textAlign: "center",
                }}
              >
                🌦️ Weather Forecast
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#f0f0f0", textAlign: "center" }}
              >
                Next 3 Days: {selectedParcelData?.weatherForecast}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f0f0f0",
                  mt: 2,
                  textAlign: "center",
                }}
              >
                📈 Yield Prediction
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#f0f0f0", textAlign: "center" }}
              >
                Estimated Yield: {selectedParcelData?.yieldPrediction}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f0f0f0",
                  mt: 2,
                  textAlign: "center",
                }}
              >
                💡 Actionable Insights
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#f0f0f0", textAlign: "center" }}
              >
                {selectedParcelData?.actionableInsights}
              </Typography>
            </CardContent>
          </Card>

          <FormControl fullWidth variant="outlined" sx={{ mt: 4 }}>
            <InputLabel>Select a Substance</InputLabel>
            <Select
              value={selectedSubstance}
              onChange={handleSubstanceChange}
              label="Select a Substance"
              sx={{
                background: "white",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 128, 0, 0.2)",
                },
              }}
            >
              {substances.map((substance) => (
                <MenuItem key={substance} value={substance}>
                  {substance}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              p: 3,
              borderRadius: 2,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Radar data={parcelHealthData} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DemoParcelDashboard;

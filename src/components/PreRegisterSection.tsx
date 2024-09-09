import React, { useState } from "react";
import { Box, Typography, Button, TextField, Grid, Paper } from "@mui/material";
import axios from "axios"; 

const PreRegisterSection: React.FC = () => {
  const [farmName, setFarmName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handler for form submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register-farm",
        {
          farmName,
          email,
          phone,
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Registration successful!");
        setErrorMessage("");
        // Reset form fields
        setFarmName("");
        setEmail("");
        setPhone("");
      }
    } catch (error) {
      setErrorMessage("There was an error submitting the form.");
      setSuccessMessage("");
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        py: 4,
        background: "linear-gradient(135deg, #a8e063 30%, #56ab2f 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 500,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            textAlign: "center",
            color: "#2F4F4F",
            fontWeight: "bold",
          }}
        >
          Pre-Register Your Farm
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, textAlign: "center", color: "#2F4F4F" }}
        >
          One of our consultants will be back to you in a short term.
        </Typography>
        {/* Success and Error Messages */}
        {successMessage && (
          <Typography sx={{ color: "green", textAlign: "center", mb: 2 }}>
            {successMessage}
          </Typography>
        )}
        {errorMessage && (
          <Typography sx={{ color: "red", textAlign: "center", mb: 2 }}>
            {errorMessage}
          </Typography>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Farm Name"
              fullWidth
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiInputBase-root": { borderRadius: 2 },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2F4F4F",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiInputBase-root": { borderRadius: 2 },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2F4F4F",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                mb: 3,
                "& .MuiInputBase-root": { borderRadius: 2 },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2F4F4F",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit} 
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: "#4CAF50",
                "&:hover": {
                  backgroundColor: "#388E3C",
                },
                borderRadius: 2,
              }}
            >
              Register Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PreRegisterSection;

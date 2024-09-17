import React from "react";
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Disclaimer: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        backgroundColor: "#f3f4f6",
        borderRadius: 3,
        border: "1px solid #d1d5db",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <InfoOutlinedIcon sx={{ color: "#4b5563", mr: 1, fontSize: 28 }} />
      <Typography
        variant="body2"
        sx={{
          color: "#4b5563",
          fontWeight: 500,
        }}
      >
        Note: The data presented on this website is for illustrative purposes
        only and does not represent official data from DigIT.
      </Typography>
    </Box>
  );
};

export default Disclaimer;

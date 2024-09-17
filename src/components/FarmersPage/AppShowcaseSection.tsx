import React, { useState } from "react";
import { Box, Typography, Dialog, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import iPadMock from "../../assets/iPadMock.png";
import dashboardDigIT from "../../assets/dashboardDigIT.png";
import documentsDigIT from "../../assets/documentsDigIT.png";
import inventoryDigIT from "../../assets/inventoryDigIT.png";
import tasksDigIT from "../../assets/tasksDigIT.png";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const screenshots = [
  dashboardDigIT,
  documentsDigIT,
  tasksDigIT,
  inventoryDigIT,
];

const AppShowcaseSection: React.FC = () => {
  const [open, setOpen] = useState(false); 
  const [currentImage, setCurrentImage] = useState(0); 

  const handleOpen = (index: number) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImage,
    prevArrow: <ArrowBackIosNewIcon sx={{ fontSize: 40, color: "#00695c" }} />,
    nextArrow: <ArrowForwardIosIcon sx={{ fontSize: 40, color: "#00695c" }} />,
  };

  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        background: "linear-gradient(135deg, #e0f7fa, #e0f2f1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 8, md: 6 }, 
          textAlign: "center",
          fontWeight: "bold",
          color: "#00695c",
        }}
      >
        Just a sample
      </Typography>
      <br /><br />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: 2,
          mx: "auto",
          maxWidth: 1200,
        }}
      >
        {/* Center iPad Mockup */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <Box
            sx={{
              maxWidth: { xs: 300, md: 400 }, 
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
              borderRadius: 5,
              overflow: "hidden",
              mx: "auto",
            }}
          >
            <img src={iPadMock} alt="iPad Mockup" style={{ width: "100%" }} />
          </Box>
        </motion.div>

        {/* Screenshots overlapping around the iPad */}
        {screenshots.map((src, index) => {
          const positions = [
            { top: "30px", left: "10px", rotation: -5 },
            { top: "50px", right: "10px", rotation: 5 },
            { bottom: "30px", left: "10px", rotation: 5 },
            { bottom: "50px", right: "10px", rotation: -5 },
          ];
          const { top, left, right, bottom, rotation } = positions[index];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              style={{
                position: "absolute",
                top,
                left,
                right,
                bottom,
                zIndex: 1,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleOpen(index)} 
                style={{ cursor: "pointer" }}
              >
                <Box
                  sx={{
                    width: { xs: 210, md: 310 }, 
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: 2,
                    overflow: "hidden",
                    transform: `rotate(${rotation}deg)`,
                    border: "3px solid #fff",
                    mx: "auto",
                  }}
                >
                  <img
                    src={src}
                    alt={`App Screenshot ${index + 1}`}
                    style={{ width: "100%" }}
                  />
                </Box>
              </motion.div>
            </motion.div>
          );
        })}
      </Box>

      {/* Modal for Slider */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box sx={{ position: "relative", p: 2 }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Slider {...settings}>
            {screenshots.map((src, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <img
                  src={src}
                  alt={`App Screenshot ${index + 1}`}
                  style={{ maxWidth: "100%", height: "auto", margin: "0 auto" }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Dialog>
    </Box>
  );
};

export default AppShowcaseSection;

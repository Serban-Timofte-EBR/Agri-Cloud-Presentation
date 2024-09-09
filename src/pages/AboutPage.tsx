import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        About Agriculture Cloud
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Agriculture Cloud is designed to bring advanced technology to farming. Explore features like “Pașaportul
        parcelei,” which provides detailed parcel information, and “Pașaportul solului,” which offers comprehensive soil
        analysis.
      </Typography>
    </Box>
  );
};

export default AboutPage;
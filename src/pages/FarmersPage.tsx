import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import FarmersHeroSection from '../components/FarmersPage/FarmersHeroSection';

const FarmersPage = () => {
  return (
    <>
      <Navbar />
      <FarmersHeroSection />
      {/* <Container sx = {{width: '100%'}}>
        <DigitConcept />
        <PerformanceClaims />
        <DemoParcelDashboard />
        <PreRegisterSection />
        <Footer />
      </Container> */}
    </>
  );
};

export default FarmersPage;
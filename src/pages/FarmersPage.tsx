import React from 'react';
import Navbar from '../components/Navbar';
import FarmersHeroSection from '../components/FarmersPage/FarmersHeroSection';
import FarmersFeatures from '../components/FarmersPage/FarmersFeatures';
import AppShowcaseSection from '../components/FarmersPage/AppShowcaseSection';

const FarmersPage = () => {
  return (
    <>
      <Navbar />
      <FarmersHeroSection />
      <FarmersFeatures />
      <AppShowcaseSection />
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
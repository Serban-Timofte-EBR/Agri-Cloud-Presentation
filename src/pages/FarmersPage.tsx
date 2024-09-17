import React from 'react';
import Navbar from '../components/Navbar';
import FarmersHeroSection from '../components/FarmersPage/FarmersHeroSection';
import FarmersFeatures from '../components/FarmersPage/FarmersFeatures';
import AppShowcaseSection from '../components/FarmersPage/AppShowcaseSection';
import HowItWorksSection from '../components/FarmersPage/HowItWorksSection';
import PreRegisterSection from '../components/PreRegisterSection';
import DigitiGoalsFarmers from '../components/FarmersPage/DigitiGoalsFarmers';

const FarmersPage = () => {
  return (
    <>
      <Navbar />
      <FarmersHeroSection />
      <FarmersFeatures />
      <AppShowcaseSection />
      <HowItWorksSection />
      <DigitiGoalsFarmers />
      <PreRegisterSection />
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
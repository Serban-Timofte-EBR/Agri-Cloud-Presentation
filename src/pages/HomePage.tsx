import React from 'react';
import { Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
import DigitConcept from '../components/DigitConcept';
import PerformanceClaims from '../components/PerformanceClaims';
import DemoParcelDashboard from '../components/DemoParcelDashboard';
import PreRegisterSection from '../components/PreRegisterSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container sx = {{width: '100%'}}>
        <DigitConcept />
        <PerformanceClaims />
        <DemoParcelDashboard />
        <PreRegisterSection />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
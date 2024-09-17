import React from 'react';
import Navbar from '../components/Navbar';
import PublicPartnersHero from '../components/PublicPartners/PublicPartnersHero';
import PublicPartnersAnalytics from '../components/PublicPartners/PublicPartnersAnalytics';
import RegionalAgriculturalInsights from '../components/PublicPartners/RegionalAgriculturalInsights';
import PreRegisterSection from '../components/PreRegisterSection';
import SolutionsForAuthorities from '../components/PublicPartners/SolutionsForAuthorities';

const PublicPartners = () => {
  return (
    <>
      <Navbar />
      <PublicPartnersHero />
      <PublicPartnersAnalytics />
      <RegionalAgriculturalInsights />
      <SolutionsForAuthorities />
      <PreRegisterSection />
    </>
  );
};

export default PublicPartners;
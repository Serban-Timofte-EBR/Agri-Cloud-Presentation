import React from 'react';
import Navbar from '../components/Navbar';
import PublicPartnersHero from '../components/PublicPartners/PublicPartnersHero';
import PublicPartnersAnalytics from '../components/PublicPartners/PublicPartnersAnalytics';
import RegionalAgriculturalInsights from '../components/PublicPartners/RegionalAgriculturalInsights';

const PublicPartners = () => {
  return (
    <>
      <Navbar />
      <PublicPartnersHero />
      <PublicPartnersAnalytics />
      <RegionalAgriculturalInsights />
    </>
  );
};

export default PublicPartners;
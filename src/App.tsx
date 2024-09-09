import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FarmersPage from "./pages/FarmersPage";
import PrivatePartnersPage from "./pages/PrivatePartnersPage";
import CorporateAnalysisPage from "./pages/CorporateAnalysisPage";
import PreRegisterPage from "./pages/PreRegisterPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/farmers" element={<FarmersPage />} />
        <Route path="/partners" element={<PrivatePartnersPage />} />
        <Route path="/corporates" element={<CorporateAnalysisPage />} />
        <Route path="/pre-register" element={<PreRegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;

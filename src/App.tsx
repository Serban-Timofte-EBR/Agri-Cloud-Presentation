import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FarmersPage from "./pages/FarmersPage";
import PublicPartners from "./pages/PublicPartners";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/farmers" element={<FarmersPage />} />
        <Route path="/public-partners" element={<PublicPartners />} />
      </Routes>
    </Router>
  );
};

export default App;

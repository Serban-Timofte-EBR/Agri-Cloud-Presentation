import React from 'react';
import { Box, Typography } from '@mui/material';

const CorporateAnalysisPage = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Tools for Corporates
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Use our platform for advanced analysis and studies, tailored to the needs of large organizations.
      </Typography>
    </Box>
  );
};

export default CorporateAnalysisPage;
import React from 'react';
import { Box, Typography } from '@mui/material';

const PrivatePartnersPage = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Opportunities for Private Partners
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Discover how Agriculture Cloud can open up new business opportunities and drive innovation.
      </Typography>
    </Box>
  );
};

export default PrivatePartnersPage;
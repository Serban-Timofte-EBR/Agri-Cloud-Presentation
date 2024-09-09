import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const PreRegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [farmName, setFarmName] = useState('');

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Pre-Register Your Farm
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Farm Name"
            variant="outlined"
            value={farmName}
            onChange={e => setFarmName(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3 }}>
        Submit
      </Button>
    </Box>
  );
};

export default PreRegisterPage;
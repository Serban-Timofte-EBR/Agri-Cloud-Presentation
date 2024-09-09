import { Box, Typography, Button } from '@mui/material';

const CallToActionSection = () => (
  <Box
    sx={{
      py: 8,
      px: 3,
      textAlign: 'center',
      backgroundColor: '#1976d2',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
      Ready to Get Started?
    </Typography>
    <Typography variant="h6" sx={{ mb: 4 }}>
      Join thousands of farmers who have transformed their operations with Agriculture Cloud.
    </Typography>
    <Button variant="contained" color="secondary" size="large">
      Sign Up Now
    </Button>
  </Box>
);

export default CallToActionSection;
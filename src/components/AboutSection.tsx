import { Box, Typography } from '@mui/material';

const AboutSection = () => (
  <Box sx={{ py: 8, px: 3 }}>
    <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
      About Agriculture Cloud
    </Typography>
    <Typography variant="h6" sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
      Agriculture Cloud is a revolutionary platform designed to bring the latest in cloud technology to the world of
      agriculture. Our tools help farmers optimize their operations, reduce costs, and increase yields, all while
      providing the flexibility to manage their farms from anywhere in the world.
    </Typography>
  </Box>
);

export default AboutSection;
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
    <Typography variant="body2">© {new Date().getFullYear()} EBR Net SRL. All rights reserved.</Typography>
    <Box sx={{ mt: 2 }}>
      <Link href="#" color="inherit" sx={{ mx: 2 }}>
        Privacy Policy
      </Link>
      <Link href="#" color="inherit" sx={{ mx: 2 }}>
        Terms of Service
      </Link>
      <Link href="#" color="inherit" sx={{ mx: 2 }}>
        Contact Us
      </Link>
    </Box>
  </Box>
);

export default Footer;
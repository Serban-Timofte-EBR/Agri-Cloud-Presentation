import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import InsightsIcon from '@mui/icons-material/Insights';

const FeaturesSection = () => (
  <Box sx={{ py: 8, px: 3, backgroundColor: '#f9f9f9' }}>
    <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
      Key Features
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2 }}>
          <CardContent>
            <CloudIcon sx={{ fontSize: 50, color: '#1976d2' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Cloud-Based Solutions
            </Typography>
            <Typography>
              Seamlessly manage your farm operations from anywhere with our cloud-based platform.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2 }}>
          <CardContent>
            <AgricultureIcon sx={{ fontSize: 50, color: '#1976d2' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Advanced Agriculture Tools
            </Typography>
            <Typography>
              Utilize modern tools to enhance productivity and monitor your crops in real-time.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2 }}>
          <CardContent>
            <InsightsIcon sx={{ fontSize: 50, color: '#1976d2' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Data-Driven Insights
            </Typography>
            <Typography>
              Make informed decisions with comprehensive data analytics and reporting.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default FeaturesSection;
import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const userRole = 'admin'; // Replace this with the actual user role from your authentication context or state

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Welcome to the Movie Booking System</Typography>

      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid container spacing={3}>
          {/* Booking feature for all users, including admin */}
          <Grid item xs={12} sm={6} md={4}>
            <Button 
              component={Link} 
              to="/movies/list"  
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Book a Movie
            </Button>
          </Grid>

          {/* Admin-only features */}
          {userRole === 'admin' && (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Button 
                  component={Link} 
                  to="/movies" 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Manage Movies
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button 
                  component={Link} 
                  to="/theaters" 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Manage Theaters
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button 
                  component={Link} 
                  to="/showtimes" 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Manage Showtimes
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;

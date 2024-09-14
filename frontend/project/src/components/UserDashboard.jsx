import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Welcome to the Movie Booking System</Typography>

      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid container spacing={3}>
          {/* Booking feature */}
          <Grid item xs={12} sm={6} md={4}>
            <Button 
              component={Link} 
              to="/movies" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Book a Movie
            </Button>
          </Grid>

          {/* Manage Movies */}
          <Grid item xs={12} sm={6} md={4}>
            <Button 
              component={Link} 
              to="/admin/movies" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Manage Movies
            </Button>
          </Grid>

          {/* Manage Theaters */}
          <Grid item xs={12} sm={6} md={4}>
            <Button 
              component={Link} 
              to="/admin/theaters" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Manage Theaters
            </Button>
          </Grid>

          {/* Manage Showtimes */}
          <Grid item xs={12} sm={6} md={4}>
            <Button 
              component={Link} 
              to="/admin/showtimes" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Manage Showtimes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default UserDashboard;


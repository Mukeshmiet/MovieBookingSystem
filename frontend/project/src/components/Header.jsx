import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './styles/header.css';  // Import custom CSS

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();  // Call the logout function passed as a prop
    navigate('/login');  // Navigate to the login page
  };

  return (
    <AppBar position="static" className="header-appbar">
      <Container className="header-container">
        <Toolbar className="header-toolbar">
          <Typography variant="h6" className="header-title">
            Movie Booking System
          </Typography>

          {/* Render links only when the user is authenticated */}
          {isAuthenticated ? (
            <div className="header-links">
              <Button color="inherit" component={Link} to="/movies">Movies</Button>
              <Button color="inherit" component={Link} to="/theaters">Theaters</Button>
              <Button color="inherit" component={Link} to="/showtimes">Showtimes</Button>
              <Button color="inherit" component={Link} to="/bookings">Bookings</Button>
              <Button color="inherit" component={Link} to="/update-profile">Update Profile</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Button color="inherit" component={Link} to="/login">Logout</Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    
  );
};

export default Header;



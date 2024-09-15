import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './footer.css'; // Import the footer-specific CSS file

const Footer = () => {
  return (
    <Box 
      component="footer" 
      id="app-footer"
      className="footer-container"
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" className="footer-text">
          Movie Booking System - All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;



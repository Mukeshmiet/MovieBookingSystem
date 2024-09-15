import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Booking = ({ showtimeId }) => {  // Accept showtimeId as a prop
  const navigate = useNavigate();
  const [numberOfTickets, setNumberOfTickets] = useState(1);  // Default to 1 ticket
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);  // Default to today's date
  const [error, setError] = useState('');

  // Handle changes to the number of tickets
  const handleTicketChange = (e) => {
    const tickets = parseInt(e.target.value, 10);
    setNumberOfTickets(tickets);
  };

  // Handle form submission for booking
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send booking request to the API with only the required fields
      await axios.post('http://localhost:8081/api/bookings', {
        showtimeId: parseInt(showtimeId, 10),  // Use showtimeId passed from props
        numberOfTickets: numberOfTickets,  // Selected number of tickets
        bookingDate: bookingDate,  // Selected booking date
      });
      navigate('/');  // Redirect to homepage or a success page after booking
    } catch (err) {
      console.error('Error making booking:', err);
      setError('Failed to make booking. Please try again.');  // Show error if booking fails
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Book Tickets</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        {/* Input for selecting the number of tickets */}
        <TextField
          label="Number of Tickets"
          type="number"
          value={numberOfTickets}
          onChange={handleTicketChange}
          fullWidth
          margin="normal"
          required
          inputProps={{ min: 1 }}
        />
        
        {/* Input for selecting the booking date */}
        <TextField
          label="Booking Date"
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}  // Update booking date
          fullWidth
          margin="normal"
          required
        />

        {/* Submit button */}
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Confirm Booking
        </Button>

        {/* Show error message if booking fails */}
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      </Box>
    </Container>
  );
};

export default Booking;



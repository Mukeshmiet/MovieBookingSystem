import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ShowtimesList = () => {
  const { theaterId } = useParams();  // Get theaterId from route params
  const [showtimes, setShowtimes] = useState([]);  // State to store showtimes
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch showtimes when the component mounts or when theaterId changes
  useEffect(() => {
    fetchShowtimes();
  }, [theaterId]);

  // Function to fetch all showtimes for the selected theater
  const fetchShowtimes = async () => {
    try {
      const response = await axios.get(`http://localhost:8084/showtimes?theaterId=${theaterId}`);
      setShowtimes(response.data);  // Set the showtimes in state
      setLoading(false);  // Stop loading once data is fetched
    } catch (err) {
      console.error('Error fetching showtimes:', err);
      setLoading(false);  // Stop loading in case of error
    }
  };

  // Display a loading message while fetching data
  if (loading) {
    return <Typography>Loading showtimes...</Typography>;
  }

  // Display a message if no showtimes are found
  if (showtimes.length === 0) {
    return <Typography>No showtimes available for this theater.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Available Showtimes</Typography>
      <List>
        {showtimes.map((showtime) => (
          <ListItem key={showtime.showtimeId}>
            <ListItemText
              primary={`Time: ${showtime.time}`}
              secondary={`Date: ${showtime.date} | Price: $${showtime.price}`}
            />
            {/* "Book Now" button links to the booking page for the selected showtime */}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={{
                pathname: `/booking`,  // Navigate to booking page
                state: { showtimeId: showtime.showtimeId }  // Pass showtimeId through state
              }}
            >
              Book Now
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ShowtimesList;




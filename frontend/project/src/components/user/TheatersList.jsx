import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TheatersList = () => {
  const [theaters, setTheaters] = useState([]);  // State to store all theaters
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch theaters when the component mounts
  useEffect(() => {
    fetchTheaters();
  }, []);

  // Function to fetch all theaters from the API
  const fetchTheaters = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/api/theaters`);  // API call to fetch all theaters
      setTheaters(response.data);  // Set the theaters in state
      setLoading(false);  // Stop loading once data is fetched
    } catch (err) {
      console.error('Error fetching theaters:', err);
      setLoading(false);  // Stop loading in case of error
    }
  };

  // Display a loading message while fetching data
  if (loading) {
    return <Typography>Loading theaters...</Typography>;
  }

  // Display a message if no theaters are found
  if (theaters.length === 0) {
    return <Typography>No theaters available.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Available Theaters</Typography>
      <List>
        {theaters.map((theater) => (
          <ListItem key={theater.theaterId}>
            <ListItemText
              primary={theater.name}
              secondary={`Location: ${theater.location} | Capacity: ${theater.capacity}`}
            />
            {/* "View Showtimes" button links to the showtimes page for the selected theater */}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/showtimes`}
            >
              View Showtimes
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TheatersList;


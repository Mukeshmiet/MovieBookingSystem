import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditShowtime = () => {
  const [showtime, setShowtime] = useState({
    movie_id: '',
    theater_id: '',
    show_date: '',
    show_time: ''
  });
  const [isNewShowtime, setIsNewShowtime] = useState(true);
  const navigate = useNavigate();
  const { showtimeId } = useParams();

  useEffect(() => {
    if (showtimeId) {
      // Fetch showtime details for editing
      axios.get(`http://localhost:8084/showtimes/${showtimeId}`)
        .then(response => {
          setShowtime(response.data);
          setIsNewShowtime(false);
        })
        .catch(error => console.error('Error fetching showtime:', error));
    }
  }, [showtimeId]);

  const handleChange = (e) => {
    setShowtime({ ...showtime, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (isNewShowtime) {
        await axios.post('http://localhost:8084/showtimes', showtime);
      } else {
        await axios.put(`http://localhost:8084/showtimes/${showtimeId}`, showtime);
      }
      navigate('/showtimes');
    } catch (error) {
      console.error('Error saving showtime:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {isNewShowtime ? 'Add New Showtime' : 'Edit Showtime'}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Movie ID"
            name="movie_id"
            value={showtime.movie_id}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Theater ID"
            name="theater_id"
            value={showtime.theater_id}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Show Date"
            name="show_date"
            type="date"
            value={showtime.show_date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Show Time"
            name="show_time"
            type="time"
            value={showtime.show_time}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSave} 
        style={{ marginTop: 16 }}
      >
        Save
      </Button>
    </Container>
  );
};

export default EditShowtime;



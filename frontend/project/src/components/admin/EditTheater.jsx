import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTheater = () => {
  const [theater, setTheater] = useState({
    name: '',
    location: '',
    capacity: ''
  });
  const [isNewTheater, setIsNewTheater] = useState(true);
  const navigate = useNavigate();
  const { theaterId } = useParams();

  useEffect(() => {
    if (theaterId) {
      // Fetch theater details for editing
      axios.get(`http://localhost:8082/api/theaters/${theaterId}`)
        .then(response => {
          setTheater(response.data);
          setIsNewTheater(false);
        })
        .catch(error => console.error('Error fetching theater:', error));
    }
  }, [theaterId]);

  const handleChange = (e) => {
    setTheater({ ...theater, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (isNewTheater) {
        await axios.post('http://localhost:8082/api/theaters', theater);
      } else {
        await axios.put(`http://localhost:8082/api/theaters/${theaterId}`, theater);
      }
      navigate('/admin/theaters');
    } catch (error) {
      console.error('Error saving theater:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {isNewTheater ? 'Add New Theater' : 'Edit Theater'}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            name="name"
            value={theater.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Location"
            name="location"
            value={theater.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Capacity"
            name="capacity"
            type="number"
            value={theater.capacity}
            onChange={handleChange}
            fullWidth
            margin="normal"
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

export default EditTheater;


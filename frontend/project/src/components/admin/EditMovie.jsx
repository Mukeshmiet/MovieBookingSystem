import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
  const [movie, setMovie] = useState({ title: '', description: '', genre: '', duration: '', rating: '' });
  const [isNewMovie, setIsNewMovie] = useState(true);
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      // Fetch movie details for editing
      axios.get(`http://localhost:8083/api/movies/${movieId}`)
        .then(response => {
          setMovie(response.data);
          setIsNewMovie(false);
        })
        .catch(error => console.error('Error fetching movie:', error));
    }
  }, [movieId]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (isNewMovie) {
        await axios.post('http://localhost:8083/api/movies', movie);
      } else {
        await axios.put(`http://localhost:8083/api/movies/${movieId}`, movie);
      }
      navigate('/admin/movies');
    } catch (error) {
      console.error('Error saving movie:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {isNewMovie ? 'Add New Movie' : 'Edit Movie'}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Description"
            name="description"
            value={movie.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Genre"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Duration"
            name="duration"
            value={movie.duration}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Rating"
            name="rating"
            value={movie.rating}
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

export default EditMovie;

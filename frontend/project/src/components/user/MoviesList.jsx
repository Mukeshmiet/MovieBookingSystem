import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8083/api/movies');
      setMovies(response.data);
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Available Movies</Typography>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.movieId} component={Link} to={`/theaters/${movie.movieId}`}>
            <ListItemText
              primary={movie.title}
              secondary={`Genre: ${movie.genre} | Rating: ${movie.rating}`}
            />
            <Button variant="contained" color="primary" component={Link} to={`/theaters`}>
              View Theaters
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MoviesList;

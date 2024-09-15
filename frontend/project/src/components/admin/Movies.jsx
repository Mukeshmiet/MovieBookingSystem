import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch movies from API
    axios.get('http://localhost:8083/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleEdit = (movieId) => {
    // Navigate to the edit page for a specific movie
    navigate(`/admin/movies/edit/${movieId}`);
  };

  const handleDelete = (movieId) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this movie?")) {
      axios.delete(`http://localhost:8083/api/movies/${movieId}`)
        .then(() => {
          // Filter out the deleted movie from the state
          setMovies(movies.filter(movie => movie.movieId !== movieId)); // Ensure the key matches the API response
        })
        .catch(error => console.error('Error deleting movie:', error));
    }
  };

  const handleNewMovie = () => {
    // Navigate to the edit page for creating a new movie
    navigate('/admin/movies/edit');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Movies
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleNewMovie} 
        style={{ marginBottom: 16 }}
      >
        Add New Movie
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.movieId}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.description}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>{movie.duration}</TableCell>
                <TableCell>{movie.rating}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(movie.movieId)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(movie.movieId)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Movies;





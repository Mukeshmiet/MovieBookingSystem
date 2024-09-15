import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Showtimes = () => {
  const [showtimes, setShowtimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch showtimes from API
    axios.get('http://localhost:8084/showtimes')
      .then(response => setShowtimes(response.data))
      .catch(error => console.error('Error fetching showtimes:', error));
  }, []);

  const handleEdit = (showtimeId) => {
    // Navigate to the edit page for a specific showtime
    navigate(`/admin/showtimes/edit/${showtimeId}`);
  };

  const handleDelete = (showtimeId) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this showtime?")) {
      axios.delete(`http://localhost:8084/showtimes/${showtimeId}`)
        .then(() => {
          // Filter out the deleted showtime from the state
          setShowtimes(showtimes.filter(showtime => showtime.showtimeId !== showtimeId));
        })
        .catch(error => console.error('Error deleting showtime:', error));
    }
  };

  const handleNewShowtime = () => {
    // Navigate to the edit page for creating a new showtime
    navigate('/admin/showtimes/edit');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Showtimes
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleNewShowtime} 
        style={{ marginBottom: 16 }}
      >
        Add New Showtime
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Showtime ID</TableCell>
              <TableCell>Movie ID</TableCell>
              <TableCell>Theater ID</TableCell>
              <TableCell>Show Date</TableCell>
              <TableCell>Show Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showtimes.map((showtime) => (
              <TableRow key={showtime.showtimeId}>
                <TableCell>{showtime.showtimeId}</TableCell>
                <TableCell>{showtime.movie_id}</TableCell>
                <TableCell>{showtime.theater_id}</TableCell>
                <TableCell>{new Date(showtime.show_date).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(`1970-01-01T${showtime.show_time}`).toLocaleTimeString()}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(showtime.showtimeId)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(showtime.showtimeId)} color="secondary">
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

export default Showtimes;




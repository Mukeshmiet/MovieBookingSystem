import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Theaterss = () => {
  const [theaters, setTheaters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch theaters from API
    axios.get('http://localhost:8082/api/theaters')
      .then(response => setTheaters(response.data))
      .catch(error => console.error('Error fetching theaters:', error));
  }, []);

  const handleEdit = (theaterId) => {
    // Navigate to the edit page for a specific theater
    navigate(`/admin/theaters/edit/${theaterId}`);
  };

  const handleDelete = (theaterId) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this theater?")) {
      axios.delete(`http://localhost:8082/api/theaters/${theaterId}`)
        .then(() => {
          // Filter out the deleted theater from the state
          setTheaters(theaters.filter(theater => theater.theaterId !== theaterId));
        })
        .catch(error => console.error('Error deleting theater:', error));
    }
  };

  const handleNewTheater = () => {
    // Navigate to the edit page for creating a new theater
    navigate('/admin/theaters/edit');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Theaters
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleNewTheater} 
        style={{ marginBottom: 16 }}
      >
        Add New Theater
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {theaters.map((theater) => (
              <TableRow key={theater.theaterId}>
                <TableCell>{theater.name}</TableCell>
                <TableCell>{theater.location}</TableCell>
                <TableCell>{theater.capacity}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(theater.theaterId)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(theater.theaterId)} color="secondary">
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

export default Theaterss;



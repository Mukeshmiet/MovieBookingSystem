import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    role: 'USER' // Default role set to 'USER'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8085/api/auth/register', formData);
      setSuccess('Registration successful. You can now login.');
      setError('');

      // Clear form after successful registration
      setFormData({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        role: 'USER' // Reset to default role
      });

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      console.error('Registration Error:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom align="center">Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            size="small"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            size="small"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            size="small"
          />
          <TextField
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            size="small"
          />
          <TextField
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            size="small"
          />
          <TextField
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            size="small"
            select
            SelectProps={{ native: true }}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </TextField>
          {error && (
            <Typography color="error" variant="body2" gutterBottom align="center">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" variant="body2" gutterBottom align="center">
              {success}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>

          {/* Button to redirect to Login page */}
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate('/login')}
          >
            Already have an account? Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;


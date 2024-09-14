import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Link, Paper, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'USER'  // Default role
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      const response = await axios.post('http://localhost:8085/api/auth/login', formData);
      const { username, roles } = response.data;

      // Extract the authority from roles array
      const role = roles.length > 0 ? roles[0].authority : null;

      // Save role and username to localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);

      // Redirect based on the role
      if (role === 'ADMIN') {
        navigate('/admin-dashboard');  // Redirect to admin dashboard
      } else if (role === 'USER') {
        navigate('/user-dashboard');  // Redirect to user dashboard
      } else {
        setError('Unknown role. Please contact support.');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
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
          />
          <FormControl component="fieldset" sx={{ mt: 2, mb: 2 }}>
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              name="role"
              value={formData.role}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="USER" control={<Radio />} label="User" />
              <FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
            </RadioGroup>
          </FormControl>
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link href="/register" variant="body2" sx={{ fontWeight: 'bold' }}>
                Register
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;




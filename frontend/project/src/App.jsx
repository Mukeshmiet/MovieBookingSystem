import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Movies from './components/admin/Movies';
import MoviesList from './components/user/MoviesList';
import TheatersList from './components/user/TheatersList';
import ShowtimesList from './components/user/ShowtimesList';
import Booking from './components/user/Booking';
import EditMovie from './components/admin/EditMovie';
import EditTheater from './components/admin/EditTheater';
import EditShowtime from './components/admin/EditShowtime';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; // Import Dashboard
import UserDashboard from './components/UserDashboard';

import Theaterss from './components/admin/Theaterss';
import Showtimes from './components/admin/Showtimes';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Admin routes */}
          <Route path="/admin/movies" element={<Movies />} />
          <Route path="/admin/movies/edit" element={<EditMovie />} />
          <Route path="/admin/theaters/edit" element={<EditTheater />} />
          <Route path="/admin/showtimes/edit" element={<EditShowtime />} />
          <Route path="/admin/showtimes" element={<Showtimes />} />
          {/* User routes */}
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/theaters" element={<TheatersList />} />
          <Route path="/showtimes" element={<ShowtimesList />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin/theaters" element={<Theaterss/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;











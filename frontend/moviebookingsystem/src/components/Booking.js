import React from 'react'
import "./booking.css";
import  { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Booking() {
  return (
    <>
    <Navigation/>
    <div className="booking-container">
      <button className="close-btn"><Link to="./home">&times;</Link></button>
      <h2>Book Your Movie</h2>

      <div className="dropdown">
        <label htmlFor="movie-title">Choose Movie:</label>
        <select id="movie-title">
          <option value="">Select a movie</option>
          <option value="movie1">Movie 1</option>
          <option value="movie2">Movie 2</option>
          <option value="movie3">Movie 3</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="theater-name">Choose Theater:</label>
        <select id="theater-name">
          <option value="">Select a theater</option>
          <option value="theater1">Theater 1</option>
          <option value="theater2">Theater 2</option>
          <option value="theater3">Theater 3</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="show-date">Choose Show Date:</label>
        <select id="show-date">
          <option value="">Select a date</option>
          <option value="2024-09-01">September 1, 2024</option>
          <option value="2024-09-02">September 2, 2024</option>
          <option value="2024-09-03">September 3, 2024</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="show-time">Choose Show Time:</label>
        <select id="show-time">
          <option value="">Select a time</option>
          <option value="10:00">10:00 AM</option>
          <option value="13:00">1:00 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="19:00">7:00 PM</option>
        </select>
      </div>

      <button className="confirm-btn">
        <Link to="./home" style={{ textDecoration: 'none', color: 'inherit' }}>Confirm Booking</Link>
      </button>
    </div>
    </>
  )
}

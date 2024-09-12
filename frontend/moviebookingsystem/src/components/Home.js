import "./home.css"
import {Link} from "react-router-dom";
import React from "react";

export default function Home() {
    return (
      <>
      
      <main>
      <div className="booking-container">
        <h1>My Bookings</h1>

        <div className="booking-item">
          <h2>Movie Name: Avengers: Endgame</h2>
          <p><strong>Booking Date:</strong> September 1, 2024</p>
          <p><strong>Number of Tickets:</strong> 3</p>
          <p><strong>Theater Name:</strong> Regal Cinemas</p>
          <p><strong>Location:</strong> New York, NY</p>
          <p><strong>Show Date:</strong> September 5, 2024</p>
          <p><strong>Show Time:</strong> 7:00 PM</p>
          <button id="showPopupBtn" className="delete-booking-btn"><Link to="./cancel">Cancel Booking</Link></button>
        </div>

        <div className="booking-item">
          <h2>Movie Name: Inception</h2>
          <p><strong>Booking Date:</strong> September 2, 2024</p>
          <p><strong>Number of Tickets:</strong> 2</p>
          <p><strong>Theater Name:</strong> AMC Theatres</p>
          <p><strong>Location:</strong> Los Angeles, CA</p>
          <p><strong>Show Date:</strong> September 6, 2024</p>
          <p><strong>Show Time:</strong> 8:00 PM</p>
          <button id="showPopupBtn" className="delete-booking-btn"><Link to="./cancel">Cancel Booking</Link></button>
        </div>
      </div>
    </main>
    </>
    )}
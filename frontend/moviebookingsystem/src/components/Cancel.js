import React from 'react'
import {Link}  from 'react-router-dom'
import "./cancel.css";

export default function Cancel() {
  return (
    <div id="popup-overlay" className="popup-overlay">
      <div className="popup">
        <button className="close-btn" id="closePopup">
          <Link to="./home">&times;</Link>
        </button>
        <h2>Do you want to cancel this booking?</h2>
        <div className="popup-actions">
          <button className="cancel-booking-btn"><Link to="./home">Cancel Booking</Link></button>
        </div>
      </div>
    </div>
  )
}

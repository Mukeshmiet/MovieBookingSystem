import React from 'react'
import {Link}  from 'react-router-dom'
import "./cancel.css";

export default function Cancel() {
  return (
    <>
      <div className="cancel-booking-overlay">
      <div className="cancel-booking-popup">
        <button className="close-btn"><Link to="./home">&times;</Link></button>
        <h2>Are you sure you want to cancel this booking?</h2>
        <div className="popup-actions">
          <button className="confirm-btn"><Link to="./home">Yes, Cancel</Link></button>
          <button className="cancel-btn"><Link to="./home">No, Keep Booking</Link></button>
        </div>
      </div>
    </div>
    </>
  )
}

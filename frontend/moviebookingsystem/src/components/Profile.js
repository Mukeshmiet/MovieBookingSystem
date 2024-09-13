import React from 'react'
import { Link } from 'react-router-dom'
import "./profiles.css";

export default function Profile() {
  return (
    <main>
      <div className="profile-container">
        <h2>Username</h2>
        <button className="edit-btn">
          <Link to="/update">Edit Details</Link>
        </button>

        <div className="user-details">
          <div className="user-detail"><strong>First Name:</strong> John</div>
          <div className="user-detail"><strong>Last Name:</strong> Doe</div>
          <div className="user-detail"><strong>Username:</strong> johndoe</div>
          <div className="user-detail">
            <strong>Email ID:</strong> john@example.com
          </div>
          <div className="user-detail"><strong>Password:</strong> ******</div>
        </div>
      </div>
    </main>
  )
}

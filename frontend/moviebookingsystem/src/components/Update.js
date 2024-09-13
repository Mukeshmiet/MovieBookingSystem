import React from 'react'
import {Link}  from 'react-router-dom'
import "./update.css";
export default function Update() {
  return (
    <div className="update-profile-form-container">
      <div className="update-profile-form">
        <button className="close-btn"><Link to="./profile">&times;</Link></button>
        <h2>Update Profile</h2>
        <form action="/update-profile" method="POST">
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" required />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email_id">Email ID:</label>
            <input type="email" id="email_id" name="email_id" required />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" className="update-btn"><Link to="./profile">Update</Link></button>
        </form>
      </div>
    </div>
  )
}

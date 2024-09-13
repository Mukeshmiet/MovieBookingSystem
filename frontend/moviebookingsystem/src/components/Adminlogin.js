import "./adminlogin.css";
import React from 'react'
import {Link}  from 'react-router-dom'

export default function Adminlogin() {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <button className="close-btn"><Link to="./hero">&times;</Link></button>
        <h2>Login</h2>
        <form action="/login" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" className="login-btn">
            <Link to="/adminhome">Login</Link>
          </button>
        </form>
      </div>
    </div>
  )
}

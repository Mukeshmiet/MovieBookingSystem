import React from 'react'
import Adminnav  from './Adminnav'
import Footer from  './Footer'
import "./users.css";


export default function Users() {
  return (
    <>
    <Adminnav/>
    <main>
      <div className="users-container">
        <h1>Users</h1>
        <button className="add-user-btn">Add New User</button>

        <div className="user-item">
          <p><strong>First Name:</strong> John</p>
          <p><strong>Last Name:</strong> Doe</p>
          <p><strong>Username:</strong> johndoe</p>
          <p><strong>Email ID:</strong> johndoe@example.com</p>
          <p><strong>Password:</strong> ******</p>
          <div className="user-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="user-item">
          <p><strong>First Name:</strong> Jane</p>
          <p><strong>Last Name:</strong> Smith</p>
          <p><strong>Username:</strong> janesmith</p>
          <p><strong>Email ID:</strong> janesmith@example.com</p>
          <p><strong>Password:</strong> ******</p>
          <div className="user-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </main>
      <Footer/>
    </>
  )
}

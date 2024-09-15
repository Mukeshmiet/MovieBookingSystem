import React from 'react'
import Adminnav  from './Adminnav'
import Footer from  './Footer'
import "./users.css";


export default function Theater() {
  return (
    <>
    <Adminnav/>
    <main>
      <div className="users-container">
        <h1>Theater List</h1>
        <button className="add-user-btn">Add New theater</button>

        <div className="user-item">
          <p><strong>Name:</strong> Bigscreen</p>
          <p><strong>Location:</strong> Mumbai</p>
          <p><strong>Capacity:</strong> 250</p>
          <div className="user-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="user-item">
          <p><strong>Name:</strong> MovieX</p>
          <p><strong>Location:</strong> Pune</p>
          <p><strong>Capacity:</strong> 120</p>
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

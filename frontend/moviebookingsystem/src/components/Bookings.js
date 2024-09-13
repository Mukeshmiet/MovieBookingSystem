import React from 'react'
import Adminnav  from './Adminnav'
import Footer from  './Footer'
import "./users.css";


export default function Bookings() {
  return (
    <>
    <Adminnav/>
    <main>
      <div className="users-container">
        <h1>Bookings List</h1>
        <button className="add-user-btn">Add New booking</button>

        <div className="user-item">
          <p><strong>User Id:</strong> 2132434</p>
          <p><strong>showtime Id:</strong> 23897821</p>
          <p><strong>Booking Date:</strong> 03/10/24</p>
          <p><strong>Number of tickets:</strong> 2</p>
          <p><strong>Total price:</strong> 450</p>
          <div className="user-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="user-item">
        <p><strong>User Id:</strong> 97877678</p>
          <p><strong>showtime Id:</strong> 5645787</p>
          <p><strong>Booking Date:</strong> 21/09/24</p>
          <p><strong>Number of tickets:</strong> 1</p>
          <p><strong>Total price:</strong> 225</p>
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

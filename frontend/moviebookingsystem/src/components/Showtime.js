import React from 'react'
import Adminnav  from './Adminnav'
import Footer from  './Footer'
import "./users.css";


export default function Showtime() {
  return (
    <>
    <Adminnav/>
    <main>
      <div className="users-container">
        <h1>Showtime List</h1>
        <button className="add-user-btn">Add New showtime</button>

        <div className="user-item">
          <p><strong>Movie Id:</strong> 2132434</p>
          <p><strong>Theater Id:</strong> 23897821</p>
          <p><strong>Show Date:</strong> 03/10/24</p>
          <p><strong>Show time:</strong> 12:00</p>
          <div className="user-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="user-item">
          <p><strong>Movie Id:</strong> 4542342</p>
          <p><strong>Theater Id:</strong> 23897821</p>
          <p><strong>Show Date:</strong> 03/10/24</p>
          <p><strong>Show time:</strong> 09:00</p>
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

import React from 'react'
import Adminnav  from './Adminnav'
import Footer from  './Footer'
import "./users.css";


export default function Adminmovies() {
  return (
    <>
    <Adminnav/>
    <main>
      <div className="users-container">
        <h1>Movies List</h1>
        <button className="add-user-btn">Add New movie</button>

        <div className="user-item">
          <p><strong>Title:</strong> John</p>
          <p><strong>Description:</strong> Doe</p>
          <p><strong>Genre:</strong> johndoe</p>
          <p><strong>Duration:</strong> johndoe@example.com</p>
          <p><strong>Ratings:</strong> ******</p>
          <div className="user-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="user-item">
          <p><strong>Title:</strong> John</p>
          <p><strong>Description:</strong> Doe</p>
          <p><strong>Genre:</strong> johndoe</p>
          <p><strong>Duration:</strong> johndoe@example.com</p>
          <p><strong>Ratings:</strong> ******</p>
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

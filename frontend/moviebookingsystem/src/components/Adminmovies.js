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
          <p><strong>Title:</strong> 3 idiots</p>
          <p><strong>Description:</strong> 3 Idiots is a 2009 Indian Hindi-language</p>
          <p><strong>Genre:</strong> Comady</p>
          <p><strong>Duration:</strong> 2h 50m</p>
          <p><strong>Ratings:</strong> 4.5/5</p>
          <div className="user-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="user-item">
          <p><strong>Title:</strong>The Imitation Game</p>
          <p><strong>Description:</strong>Biographical thriller film</p>
          <p><strong>Genre:</strong>Thriller</p>
          <p><strong>Duration:</strong>1h 54m</p>
          <p><strong>Ratings:</strong>4.8/5</p>
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

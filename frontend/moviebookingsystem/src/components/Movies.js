import React from 'react';
import { Link } from 'react-router-dom';
import "./movies.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Movies() {
  return (
    <>
    <Navigation/>
    <main>
      <div className="movies-container">

        <div className="movies-heading">
          <h2>Movies</h2>
        </div>

        <div className="search-filter-container">
          <div className="search-box">
            <input type="text" placeholder="Search by Title" id="movie-title" />
            <select id="genre-search">
              <option value="">Genre</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
            </select>
            <button type="submit" className="search-btn">Search</button>
          </div>

          <div className="filter-box">
            <select id="genre-filter">
              <option value="">Filter by Genre</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
            </select>
            <select id="rating-filter">
              <option value="">Filter by Rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>
            <select id="duration-filter">
              <option value="">Filter by Duration</option>
              <option value="short">Short (&lt; 90 min)</option>
              <option value="long">Long (&gt; 90 min)</option>
            </select>
          </div>
        </div>

        <div className="movies-list">
          <div className="movie-item">
            <h3>Movie Title 1</h3>
            <p><strong>Genre:</strong> Action</p>
            <p><strong>Duration:</strong> 120 min</p>
            <p><strong>Rating:</strong> 4.5/5</p>
            <p>
              <strong>Description:</strong> A thrilling action-packed movie.
            </p>
            <button type="button" className="book-btn">
              <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>Book Now</Link>
            </button>
          </div>
          <div className="movie-item">
            <h3>Movie Title 2</h3>
            <p><strong>Genre:</strong> Comedy</p>
            <p><strong>Duration:</strong> 95 min</p>
            <p><strong>Rating:</strong> 4/5</p>
            <p>
              <strong>Description:</strong> A hilarious comedy with a heartwarming story.
            </p>
            <button type="button" className="book-btn">
              <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>Book Now</Link>
            </button>
          </div>
        </div>

      </div>
    </main>
    <Footer/>
    </>
  )
}


import "./navigation.css"
import {Link} from "react-router-dom";
import React from "react";

export default function Adminnav() {
    return (
      <>
        <div className="header-container">
          <header>
            <div className="container">
              <div className="logo">
                <h1>MovieTime</h1>
              </div>
              <nav>
                <ul>
                <li>
                    <Link to="/adminhome">Home</Link>
                  </li>
                  <li>
                    <Link to="/adminmovies">Movies</Link>
                  </li>
                  <li>
                    <Link to="/theater">Theater</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/bookings">Bookings</Link>
                  </li>
                  <li>
                    <Link to="/showtime">Showtime</Link>
                  </li>
                  <li>
                    <Link to="/admin">Signout</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
        </>
      )
      };
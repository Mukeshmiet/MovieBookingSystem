import "./navigation.css"
import {Link} from "react-router-dom";
import React from "react";

export default function Navigation() {
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
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/movie">Movies</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/hero">Signout</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
        </>
      )
      };
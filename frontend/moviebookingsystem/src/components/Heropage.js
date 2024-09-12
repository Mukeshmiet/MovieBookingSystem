import "./heropage.css"
import logo from "../media/heropageimg.png";
import {Link} from "react-router-dom";
import React from "react";

export default function Heropage() {
    return (
      <>
      
       <main>
        <div className="main-container">
          <div className="text-container">
            <h1>Welcome to MovieTime</h1>
            <p>Book your favorite movies in nearby theaters effortlessly.</p>
            <div className="buttons">
              <button className="login">
                <Link to="/login">Login</Link>
              </button>
              <button className="signin">
                <Link to="/signin">Signin</Link>
              </button>
            </div>
          </div>
          <div className="image-container">
            <img src={logo} alt="Movie Illustration" />
          </div>
        </div>
      </main>
      
      </>
    )
}
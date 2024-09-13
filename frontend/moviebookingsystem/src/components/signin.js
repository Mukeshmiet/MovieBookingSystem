import "./signin.css"
import {Link} from "react-router-dom";
import React from "react";

export default function Signin() {
    return (
    <>
      <div className="signin-form-container">
            <div className="signin-form">
                <button className="close-btn"><Link to="./hero">&times;</Link></button>
                <h2>Signin</h2>
                <form action="/signin" method="POST">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="first_name">First Name:</label>
                        <input type="text" id="first_name" name="first_name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name:</label>
                        <input type="text" id="last_name" name="last_name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_id">Email ID:</label>
                        <input type="email" id="email_id" name="email_id" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <button type="submit" className="signin-btn">
                        <Link to="/home">Signin</Link>
                    </button>
                </form>
            </div>
      </div >
    </>
    )
}
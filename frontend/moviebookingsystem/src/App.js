// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heropage from './components/Heropage';
import Home from './components/Home';
import Navigation  from './components/Navigation';
import Footer  from './components/Footer';
import Signin from "./components/signin";
import Login from "./components/Login";
import Booking from "./components/Booking";
import Cancel  from "./components/Cancel";


function App() {
  return (
    <div>
      <Router>
      <Navigation/>
      <div>

        <Routes>
          <Route index element={<Heropage />} />
          <Route path="/hero" element={<Heropage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

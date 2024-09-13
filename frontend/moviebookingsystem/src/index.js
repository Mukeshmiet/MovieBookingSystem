import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Heropage from './components/Heropage';
import Home from './components/Home';
import Signin from './components/signin';
import Login from './components/Login';
import Cancel from './components/Cancel';
import Booking  from './components/Booking';
import Movies  from './components/Movies';
import Profile  from './components/Profile';
import Update from  './components/Update';
import Adminlogin from './components/Adminlogin';
import Users  from './components/Users';
import Adminmovies  from './components/Adminmovies';
import Theater from './components/Theater';
import Bookings  from './components/Bookings';
import Showtime from  './components/Showtime';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Heropage/>,
  },
  {
    path: "/hero",
    element: <Heropage/>,
  },
  {
    path: "/signin/hero",
    element: <Heropage/>,
  },
  {
    path: "/login/hero",
    element: <Heropage/>,
  },
  {
    path: "/admin/hero",
    element: <Heropage/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/home/cancel/home",
    element: <Home/>,
  },
  {
    path: "/booking/home",
    element: <Home/>,
  },
  {
    path: "/movies",
    element: <Movies/>,
  },
  {
    path: "/booking/movies",
    element: <Movies/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/admin",
    element: <Adminlogin/>,
  },
  {
    path: "/adminhome",
    element: <Users/>,
  },
  {
    path: "/adminmovies",
    element: <Adminmovies/>,
  },
  {
    path: "/theater",
    element: <Theater/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },
  {
    path: "/booking",
    element: <Booking/>,
  },
  {
    path: "/bookings",
    element: <Bookings/>,
  },
  {
    path: "/showtime",
    element: <Showtime/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/update/profile",
    element: <Profile/>,
  },
  {
    path: "/update",
    element: <Update/>,
  },
  {
    path: "/home/cancel",
    element: <Cancel/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

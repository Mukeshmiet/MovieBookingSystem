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
    path: "/booking",
    element: <Booking/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/update",
    element: <Update/>,
  },
  {
    path: "/profile/update",
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

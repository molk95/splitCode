import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Services({onRouteChange}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Molk's World !</h1>
        <h2>Dunoo really  hahaha </h2>
        <div className='btn-group'>
        <Link to="/">
            <button
              className="btn"
              //  onClick={() =>onRouteChange('Home Page')}
            >
              Home
            </button>
          </Link>
          <Link to="/about">
            <button
              className="btn"
              // onClick={() =>onRouteChange("About Page")}
            >
              About
            </button>
          </Link>
      </div>
      </header>
    </div>
  );
}
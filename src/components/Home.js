import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Home({ onRouteChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Molk's World !</h1>
        <div className="btn-group">
          <Link to="/services">
            <button
              className="btn"
              //  onClick={() =>onRouteChange('Services Page')}
            >
              Services
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



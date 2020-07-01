import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function About({onRouteChange}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Molk's World !</h1>
        <h2>About Me!!!!! It's a secret.....</h2>
        <div className='btn-group'>
        <Link to="/">
            <button
              className="btn"
              //  onClick={() =>onRouteChange('Home Page')}
            >
              Home
            </button>
          </Link>
          <Link to="/services">
            <button
              className="btn"
              // onClick={() =>onRouteChange("Services Page")}
            >
              Services
            </button>
          </Link>
      </div>
      </header>
    </div>
  );
}
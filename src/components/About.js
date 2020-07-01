import React from "react";
import logo from "../logo.svg";

export default function About({onRouteChange}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Molk's World !</h1>
        <h2>About Me!!!!! It's a secret.....</h2>
        <div className='btn-group'>
      <button className='btn' onClick={() =>onRouteChange('Home Page')} >Home</button>
      <button className='btn' onClick={() =>onRouteChange('Services Page')} >Services</button>
      </div>
      </header>
    </div>
  );
}
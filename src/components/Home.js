import React from "react";
import logo from "../logo.svg";

export default function Home({onRouteChange}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Molk's World !</h1>
        <div className='btn-group'>
      <button className='btn' onClick={() =>onRouteChange('Services Page')} >Services</button>
      <button className='btn' onClick={() =>onRouteChange("About Page")} >About</button>
      </div>
      </header>
    </div>
  );
}

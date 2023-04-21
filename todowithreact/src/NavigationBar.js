import React from 'react';
import './NavigationBar.css';
import logo from './logo.png';

function NavigationBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="TaskHub" className="TaskHub" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Calendar">Calendar</a></li>
        
      </ul>
      <button className="login-btn">Login</button>
    </div>
  );
}

export default NavigationBar;
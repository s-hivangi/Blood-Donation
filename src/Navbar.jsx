import React from 'react';
import './Navbar.css';
import whitelogo from './assets/whitelogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-name">
        <img src={whitelogo} alt="Sewaa Logo" className="whitelogo" />
        <span className="brand-text">Sewaa</span>
      </div>

      <div className="nav-items">
        <ul>
          <li><NavLink to='/' className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
          <li><NavLink to='/donate' className={({ isActive }) => isActive ? "active-link" : ""}>Donate</NavLink></li>
          <li><NavLink to='/request' className={({ isActive }) => isActive ? "active-link" : ""}>Request</NavLink></li>
          <li><NavLink to='/contact-us' className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
          <li><NavLink to='/login' className={({ isActive }) => isActive ? "active-link" : ""}>Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

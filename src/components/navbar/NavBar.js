// Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Import your CSS file for styling
import logo  from './logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // eslint-disable-next-line 
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt='logo' style={{width:'120px'}}/>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          
          <li className="nav-item">
            <a href="#properties" className="nav-link">
              Properties
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#careers" className="nav-link">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

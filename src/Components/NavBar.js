import React from 'react';
import './Navbar.css'; // Add your CSS styles for styling the navbar
import NewIcon from './NewIcon' 

function Navbar() {
  return (
    <div className="navbar-full">
    <nav className="navbar">
      <div className="navbar-container">

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-links">
              <NewIcon />
              New In Stock
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Disposables
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Devices
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              E-Liquids
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Pod Systems & Glass
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Clearance Disposables
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Brands
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Promos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              My Cart (0)
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;

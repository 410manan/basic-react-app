import React, { useState } from 'react';
import NewIcon from './NewIcon'; // Assuming NewIcon component for the icon
const DropdownContent = () => {
  return (
    <div className="dropdown-content d-flex">
      <div className="dropdown-column">
        <ul>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
        </ul>
      </div>
      <div className="dropdown-column">
        <ul>
          <li>
            <a href="#">Item 4</a>
          </li>
          <li>
            <a href="#">Item 5</a>
          </li>
          <li>
            <a href="#">Item 6</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navbar-full">
      <div className="navbar">
        <div className="navbar-container">

          <ul className="nav-menu">
            <li className="nav-item">
              <a
                href="#"
                className="nav-links"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <NewIcon />
                New In Stock
                {isDropdownOpen && <DropdownContent />}
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
      </div>
    </div>
  );
}

export default Navbar;

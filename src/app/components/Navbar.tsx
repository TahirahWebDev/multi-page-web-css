"use client";
import Link from 'next/link';
import { useState } from 'react';
import './Navbar.css'; // Import custom CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-logo">DevHub</Link>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-icon">
          <button onClick={toggleMenu} className="hamburger-button">
            <svg className="hamburger-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="navbar-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="dropdown-menu">
          <Link href="/" className="dropdown-link">Home</Link>
          <Link href="/about" className="dropdown-link">About</Link>
          <Link href="/contact" className="dropdown-link">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

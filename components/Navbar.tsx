'use client'

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">Muhammad Dawood</div>
        
        {/* Hamburger Button - Only visible on mobile */}
        <button
          className="hamburger md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-links hidden md:flex">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/MuhammadDawoodsResume.pdf" target="_blank" className="resume-btn">Resume</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Work</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          <li><a href="/MuhammadDawoodsResume.pdf" target="_blank" className="resume-btn" onClick={() => setIsMenuOpen(false)}>Resume</a></li>
        </ul>
      </div>
    </>
  )
}
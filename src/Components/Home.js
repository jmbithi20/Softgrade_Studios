import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from '../softgrade-logo.svg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="Softgrade logo" className="nav-logo-image" />
            <h2>Softgrade Design Lab</h2>
          </div>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className={`hero ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <div>
            <div className="hero-badge">Design Studio</div>
            <h1 className="hero-title">
              Elevate your brand with human-centered digital design
            </h1>
            <h2 className="hero-subtitle">Softgrade Design Lab</h2>
            <p className="hero-description">
              We craft elegant, responsive web experiences that are fast, accessible,
              and delightful on every device.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Get Started</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="design-showcase" aria-hidden="true">
              <div className="device-frame">
                <div className="device-header">
                  <span></span><span></span><span></span>
                </div>
                <div className="device-content">
                  <div className="bar b1"></div>
                  <div className="bar b2"></div>
                  <div className="bar b3"></div>
                  <div className="tiles">
                    <div className="tile t1"></div>
                    <div className="tile t2"></div>
                    <div className="tile t3"></div>
                  </div>
                </div>
              </div>
              <div className="color-swatches">
                <span className="swatch s1"></span>
                <span className="swatch s2"></span>
                <span className="swatch s3"></span>
              </div>
              <svg className="pen-icon" width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12l7-7m-4.5 1.5l3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 21l3.5-1L20 6.5 17.5 4 5 16.5 4 20z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                <circle cx="12" cy="12" r="1.2" fill="#f59e0b"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Softgrade</h2>
          <p className="section-lead">
            We’re a small design and engineering studio focused on crafting fast,
            accessible websites and products. Our process blends research,
            prototyping, and polish to ship meaningful experiences.
          </p>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>🎨 Brand & UI Design</h3>
              <p>Identity systems, design systems, and beautiful interfaces that scale.</p>
            </div>
            <div className="service-card">
              <h3>⚛️ Web Development</h3>
              <p>Responsive, performant sites built with modern React tooling.</p>
            </div>
            <div className="service-card">
              <h3>🔎 UX Optimization</h3>
              <p>Accessibility, usability audits, and iterative improvements.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2025 Softgrade Design Lab</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

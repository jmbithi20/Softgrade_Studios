import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from '../softgrade-logo.svg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          <ul className="nav-menu">
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
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
            <div className="profile-placeholder" aria-hidden="true">
              <span>✨</span>
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

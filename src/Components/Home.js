import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 70 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=E-Commerce'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tech: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Task+App'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio built with React',
      tech: ['React', 'CSS3', 'JavaScript'],
      image: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Portfolio'
    }
  ];

  return (
    <div className="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Portfolio</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`hero ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Julius Kisia</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create beautiful, functional, and user-centered digital experiences.
            Passionate about clean code and innovative solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Download CV</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>👨‍💻</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience
                building web applications. I love turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of coffee
                while reading about the latest industry trends.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>20+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <button className="btn btn-small">Live Demo</button>
                    <button className="btn btn-small btn-outline">Source Code</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>jjmkisia@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>(+254) 746038045</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Nairobi,Kenya</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

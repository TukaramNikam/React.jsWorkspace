import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Tukaram NIkam</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="hero-description">
            I create beautiful, functional web applications with modern technologies.
            Passionate about clean code and user-centered design.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src="/vite.svg" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

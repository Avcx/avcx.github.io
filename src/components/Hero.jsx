import React from "react";
import headshot from "/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="section-content">
        <div className="hero-card">
          <header className="intro">
            <h1>Akiel Adams</h1>
            <h2>Full-Stack JavaScript Developer</h2>
            <h3>Calgary, AB</h3>
          </header>
          <img src={headshot} alt="Photo of Akiel" />
        </div>
        <div className="cta-btn">
          <a href="#projects">Check Out My Work!</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

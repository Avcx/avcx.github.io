import React from "react";
import headshot from "/img/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-img" />
      <div className="section-content">
        <img className="headshot" src={headshot} alt="Photo of Akiel" />
        <div className="hero-card">
          <header className="intro">
            <h1>Akiel Adams</h1>
            <div className="code-img" />
            <h2>Full-Stack JavaScript Developer</h2>

            <h3>Calgary, AB</h3>
          </header>
          <div className="about">
            <div className="h-text">
              <p>
                Hi, I’m Akiel. I’m a JavaScript developer with experience in
                both front-end and back-end development. I specialize in
                creating responsive and user-friendly web applications using
                modern frameworks like Express. I’m also experienced in working
                with Node.js.
              </p>
            </div>
          </div>
          <div className="cta-btn">
            <a href="#projects">My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

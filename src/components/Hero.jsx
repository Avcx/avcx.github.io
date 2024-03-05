import React from "react";
import { Link } from "react-router-dom";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="code-img"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
            </svg>
            <h2>Full-Stack JavaScript Developer</h2>

            <h3>Calgary, AB</h3>
          </header>
          <div className="about">
            <aside className="social-links-container">
              <ul className="social-links">
                <li>
                  <a className="github" href="https://github.com/Avcx"></a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/akiel-adams-4109b326a/"
                  ></a>
                </li>
              </ul>
            </aside>
            <div className="h-text">
              <h2>Skills</h2>
              <p></p>
              <div className="svg-container">
                <svg
                  className="skill-svg"
                  id="javascript-icon"
                  fill="#c3073f"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="250px"
                  height="250px"
                >
                  {" "}
                  <path d="M45.274,2.325C45.084,2.118,44.817,2,44.536,2H5.464C5.183,2,4.916,2.118,4.726,2.325S4.443,2.81,4.468,3.089l3.52,39.427 c0.037,0.412,0.324,0.759,0.722,0.873l16.01,4.573C24.809,47.987,24.902,48,24.994,48s0.185-0.013,0.274-0.038l16.024-4.573 c0.398-0.114,0.685-0.461,0.722-0.873l3.518-39.427C45.557,2.81,45.463,2.532,45.274,2.325z M12,29.004l7,1.942V11h4v26l-11-3.051 V29.004z M38.054,22L37,34.25L27,37v-4.601l6.75-1.855l0.25-3.75L27,28V11h12l-0.345,4H31v8L38.054,22z" />
                </svg>
                <svg
                  className="skill-svg"
                  id="html5-icon"
                  fill="#c3073f"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="250px"
                  height="250px"
                >
                  <path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z" />
                </svg>
                <svg
                  className="skill-svg"
                  id="css3-icon"
                  fill="#c3073f"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="250px"
                  height="250px"
                >
                  <path
                    fill-rule="evenodd"
                    d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"
                  />
                </svg>
                <svg
                  className="skill-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-11.5 -10.23174 23 20.46348"
                >
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="#950740" />
                  <g stroke="#950740" stroke-width="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <svg
                  className="skill-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="250px"
                  height="250px"
                >
                  <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="cta-btn">
            <Link to="/projects">Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { useMemo } from "react";

const Project = ({
  id,
  name,
  desc,
  imgUrls,
  tech,
  links,
  navFuncs,
  totalPrjs,
}) => {
  let buttons = "";

  return (
    <div className="project">
      <h2 className="prj-head">{name}</h2>
      <img className="prj-img" src={imgUrls[0]} alt={`Image of ${name}`} />
      <div className="prj-link">
        <a href={links.live}>Live Link</a>
        <a href={links.git}>Github Link</a>
      </div>
      <ul className="prj-tech">
        {tech.map((kind) => (
          <li key={tech.indexOf(kind)}>{kind}</li>
        ))}
      </ul>{" "}
      <div className="prj-desc">
        <p>{desc}</p>
      </div>
      <nav className="nav-container">
        {id > 0 ? (
          <button className="nav-btn" onClick={navFuncs.prevPrj}>
            &lt; Previous
          </button>
        ) : null}
        {id < totalPrjs - 1 ? (
          <button className="nav-btn" onClick={navFuncs.nextPrj}>
            Next &gt;
          </button>
        ) : null}
      </nav>
    </div>
  );
};

export default Project;

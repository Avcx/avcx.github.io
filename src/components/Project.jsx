import React from "react";

const Project = ({ id, name, desc, imgUrls, tech, links }) => {
  return (
    <div className="project">
      <h4 className="prj-head">{name}</h4>
      <img className="prj-img" src={imgUrls[0]} alt={`Image of ${name}`} />
      <p className="prj-desc">{desc}</p>
      <ul className="prj-tech">
        {tech.map((kind) => (
          <li key={tech.indexOf(kind)}>{kind}</li>
        ))}
      </ul>
      <div className="prj-link">
        <a href={links.live}>Live Link</a>
        <a href={links.git}>Github Link</a>
      </div>
    </div>
  );
};

export default Project;

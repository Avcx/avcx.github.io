import React, { useMemo, useState } from "react";
import data from "../assets/data.json";
import Project from "./Project";
import { Link } from "react-router-dom";

const Projects = () => {
  const [ID, setID] = useState(0);
  const projectArray = [];

  const nextPrj = () => {
    setID(ID + 1);
  };
  const prevPrj = () => {
    setID(ID - 1);
  };
  useMemo(() => {
    let counter = 0;
    data.projects.map(
      (project) =>
        (counter = projectArray.push(
          <Project
            key={project.id}
            id={counter}
            totalPrjs={data.projects.length}
            name={project.project_name}
            desc={project.description}
            imgUrls={project.image_urls}
            tech={project.technologies}
            links={{ live: project.live_link, git: project.github_link }}
            navFuncs={{ nextPrj, prevPrj }}
          />
        ))
    );
  });
  return (
    <section
      className="projects animate__animated animate__fadeInUpBig animate__faster"
      id="projects"
    >
      <div className="section-content">
        <header id="top">
          <h1>Projects</h1>
          <Link to="/">X</Link>
        </header>
        <div className="project-container">{projectArray[ID]}</div>
        <div></div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useMemo, useState } from "react";
import data from "../assets/data.json";
import Project from "./Project";
import { Link } from "react-router-dom";
import PreloadImages from "./PreloadImages";

const Projects = () => {
  const [ID, setID] = useState(0);
  const projectArray = [];
  const imgUrls = [];

  const nextPrj = () => {
    setID(ID + 1);
  };
  const prevPrj = () => {
    setID(ID - 1);
  };

  useMemo(() => {
    let idCounter = 0;
    data.projects.map((project) => {
      idCounter = projectArray.push(
        <Project
          key={project.id}
          id={idCounter}
          totalPrjs={data.projects.length}
          name={project.project_name}
          desc={project.description}
          imgUrls={project.image_urls}
          tech={project.technologies}
          links={{ live: project.live_link, git: project.github_link }}
          navFuncs={{ nextPrj, prevPrj }}
        />
      );
      imgUrls.push(project.image_urls);
    });
  }, [projectArray]);

  return (
    <section
      className="projects animate__animated animate__fadeInUpBig animate__faster"
      id="projects"
    >
      <PreloadImages imgUrls={imgUrls} />
      <div className="section-content">
        <header id="top">
          <h1>Projects</h1>
          <Link to="/">X</Link>
        </header>
        <div className="project-container">{projectArray[ID]}</div>
      </div>
    </section>
  );
};

export default Projects;

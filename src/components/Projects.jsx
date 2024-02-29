import React, { useMemo } from "react";
import data from "../assets/data.json";
import Project from "./Project";

const Projects = () => {
  const projectArray = [];
  useMemo(() => {
    data.projects.map((project) =>
      projectArray.push(
        <Project
          key={project.id}
          name={project.project_name}
          desc={project.description}
          imgUrls={project.image_urls}
          tech={project.technologies}
          links={{ live: project.live_link, git: project.github_link }}
        />
      )
    );
  });
  return (
    <section className="projects" id="projects">
      <div className="section-content">
        <header>
          <h2>Projects</h2>
        </header>
        <div className="project-container">{projectArray}</div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import ProjectItem from '../components/ProjectItem';
import { projectList } from "../helpers/ProjectList";

import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <div className="projectList">
        {projectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects
import React from "react";
import CardProject from "./CardProject";
import { projects } from "../data/data";

const Portfolio = () => {
  return (
    <section className="container-projects" id="projects">
      <div className="container-card grid">
        <h3>Mes Projets</h3>
        {projects.map((project) => (
          <CardProject project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

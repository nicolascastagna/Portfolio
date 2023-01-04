import React from "react";
import CardProject from "./CardProject";
import Filter from "./Filter";
import { useState } from "react";

const Portfolio = () => {
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <section className="container-projects" id="projects">
      <div className="container-card grid">
        <h3>Mes Projets</h3>
        <Filter
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {filtered.map((project: Project) => (
          <CardProject project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

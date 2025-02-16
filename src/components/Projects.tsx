import React from "react";
import CardProject from "./CardProject";
import Filter from "./Filter";
import { useState } from "react";

const Portfolio = () => {
    const [filtered, setFiltered] = useState([]);
    const [activeLanguage, setActiveLanguage] = useState<string>("All");

    return (
        <section className="container-projects" id="projects">
            <div className="container-card grid">
                <h3 className="grid__title">Mes Projets</h3>
                <Filter
                    setFiltered={setFiltered}
                    activeLanguage={activeLanguage}
                    setActiveLanguage={setActiveLanguage}
                />
                {filtered.map((project) => (
                    <CardProject project={project} key={project.id} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

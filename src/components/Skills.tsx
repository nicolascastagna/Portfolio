import React from "react";

const Skills = () => {
    return (
        <section className="container-skills grid" id="skills">
            <h3 className="grid__title">Mes compétences / Technos</h3>
            <h4>Front-end</h4>
            <div className="container-tech list">
                <h5>HTML</h5>
                <h5>SCSS</h5>
                <h5>JavaScript</h5>
                <h5>React</h5>
                <h5>Next.js</h5>
                <h5>TypeScript</h5>
                <h5>React-Native</h5>
            </div>
            <h4>Back-end</h4>
            <div className="container-tech list">
                <h5>PHP</h5>
                <h5>Symfony</h5>
                <h5>SQL</h5>
                <h5>Twig</h5>
                <h5>Node.js</h5>
                <h5>MySQL</h5>
            </div>
            <h4>Outils</h4>
            <div className="container-tools list">
                <h5>PHPUnit</h5>
                <h5>Behat</h5>
                <h5>Jest</h5>
                <h5>React Testing Library</h5>
                <h5>Material UI</h5>
                <h5>VsCode</h5>
                <h5>Git</h5>
                <h5>WordPress</h5>
                <h5>UML</h5>
            </div>
            <h4>Soft Skills</h4>
            <div className="container-soft list">
                <h5>Passionné</h5>
                <h5>Autonome</h5>
                <h5>Curieux</h5>
                <h5>Esprit d'équipe</h5>
            </div>
        </section>
    );
};

export default Skills;

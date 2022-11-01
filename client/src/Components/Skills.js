import React from "react";

const Skills = () => {
  return (
    <section className="container-skills grid" id="skills">
      <h3>Mes compétences / Technos</h3>
      <h4>Front-end</h4>
      <div className="container-tech list">
        <h5>HTML</h5>
        <h5>CSS / Sass</h5>
        <h5>JavaScript</h5>
        <h5>React</h5>
        <h5>Redux</h5>
        <h5>TypeScript</h5>
        <h5>Next.js</h5>
        <h5>Tailwind</h5>
        <h5>Jest</h5>
      </div>
      <h4>Back-end</h4>
      <div className="container-tech list">
        <h5>Node.js</h5>
        <h5>Express</h5>
        <h5>MongoDB</h5>
        <h5>MySQL</h5>
        <h5>PHP</h5>
      </div>
      <h4>Outils</h4>
      <div className="container-tools list">
        <h5>Visual Studio Code</h5>
        <h5>Git</h5>
        <h5>GitHub</h5>
        <h5>Npm</h5>
        <h5>WordPress</h5>
        <h5>Elementor</h5>
      </div>
      <h4>Soft Skills</h4>
      <div className="container-soft list">
        <h5>Curieux</h5>
        <h5>Autonome</h5>
        <h5>Perséverant</h5>
        <h5>Sens de la communication</h5>
      </div>
    </section>
  );
};

export default Skills;

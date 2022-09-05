import React from "react";

const Skills = () => {
  return (
    <div className="container-skills grid">
      <h3>Mes compétences / Technos</h3>
      <h4>Languages</h4>
      <div className="container-tech list">
        <h5>HTML</h5>
        <h5>CSS / Sass</h5>
        <h5>JavaScript</h5>
        <h5>Node.js</h5>
        <h5>Express</h5>
        <h5>React</h5>
        <h5>Redux</h5>
        <h5>MongoDB</h5>
        <h5>MySQL</h5>
        <h5>TypeScript</h5>
      </div>
      <h3>Outils</h3>
      <div className="container-tools list">
        <h5>Visual Studio Code</h5>
        <h5>Git</h5>
        <h5>Npm</h5>
        <h5>WordPress</h5>
        <h5>Elementor</h5>
      </div>
      <h3>Soft Skills</h3>
      <div className="container-soft list">
        <h5>Curieux</h5>
        <h5>Autonome</h5>
        <h5>Texte</h5>
        <h5>Texte</h5>
      </div>
    </div>
  );
};

export default Skills;

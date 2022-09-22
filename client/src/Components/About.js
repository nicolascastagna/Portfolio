import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container-about grid" id="about">
      <h3>Qui suis-je ?</h3>
      <p>
        Passionné par le monde de l'informatique depuis toujours, j'ai découvert
        le monde du développement web il y a quelques années et j'ai très
        rapidement été conquis, de manière autodidacte j'avais créé un blog sur
        WordPress avec elementor et appris par la suite les bases du
        développement. C'est alors qu'en fin 2021, j'entreprends une formation
        par Openclassrooms de Développeur Web.
      </p>
      <br />
      <p>
        Ayant terminé la formation depuis fin août, je suis à la recherche d'un
        poste idéalement en alternance pour continuer vers une formation en tant
        que Développeur d'applications JavaScript - React par Openclassrooms. Je
        suis ouvert également à toutes autres opportunités.
      </p>
      <div className="container-cv">
        <Link
          to="/images/curriculum_vitae_nicolas_castagna.pdf"
          target="_blank"
          norefferer="true"
          download
        >
          <button
            className="download-cv"
            aria-label="Téléchargez mon curriculum vitae"
          >
            Télécharger mon CV
            <div className="icon-cv">
              <span className="material-symbols-outlined icon-download">
                file_download
              </span>
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;

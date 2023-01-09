import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container-about grid" id="about">
      <h3>Qui suis-je ?</h3>
      <p>
        Je suis Nicolas,{" "}
        <strong>
          un développeur web front-end spécialisé en React / Next.js
        </strong>{" "}
        et freelance depuis peu sur la plateforme{" "}
        <strong
          style={{ borderBottom: "1px solid black", cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.malt.fr/profile/nicolascastagna/",
              "_blank"
            ) ||
            window.location.replace(
              "https://www.malt.fr/profile/nicolascastagna/"
            )
          }
        >
          Malt
        </strong>
        , je vous propose mes services et vous accompagne dans la réalisation de
        votre projet. Passionné par le développement web, j'ai réalisé une
        formation de développeur web par Openclassrooms qui m'a permis
        d'acquérir un solide socle de connaissances.
        <br />
        <br />
        Mon intérêt pour le côté front-end et plus précisément pour l'univers de
        React avec tout ce qui gravite autour, comme Next.js et TypeScript, m'a
        poussé à me perfectionner quotidiennement afin de répondre aux besoins
        du secteur en constante évolution.
        <br />
        <br />
        <strong>Mes compétences incluent :</strong>
        <br />
        <br />- Front-End : HTML5, Sass, Tailwind, styled-component JavaScript,
        React, Redux, Next.js, TypeScript, Jest / React testing library <br />-
        Back-End : Node.js, Express, PHP
        <br />- Bases de données: MongoDB, MySQL, Sequelize <br />- CMS:
        Wordpress, <br />- Outil de versionning: GitHub
        <br />
        <br />
        <strong>Je vous propose des services tels que :</strong> <br />
        <br />- Développement front-end from scratch,
        <br />- Ajout d’une ou plusieurs pages React.js à votre site existant,
        <br />- Optimisation d'un site web existant,
        <br />- Résolution problème / bug technique,
        <br />- Déploiement de l'application web (Netlify, Vercel) et nom de
        domaine associés, <br />
        <br />
        Si vous souhaitez discuter de votre projet ou obtenir des informations
        supplémentaires n'hésitez pas à me contacter ! Au plaisir de commencer
        une belle aventure ensemble !
      </p>
      <br />
      <p>
        Je suis ouvert également à toutes autres opportunités, comme un poste{" "}
        <strong>salarié.</strong>
      </p>
      <div className="container-cv">
        <Link
          to="/images/curriculum_vitae_nicolas_castagna.pdf"
          target="_blank"
          rel="noreferrer"
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

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container-about grid" id="about">
      <h3>Qui suis-je ?</h3>
      <p>
        Je m'appelle Nicolas,{" "}
        <strong>Développeur Web Front-end orienté React / Next.js</strong> et
        freelance depuis peu sur la plateforme{" "}
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
        votre projet. Passionné par l'informatique et plus précisement par le
        développement web, j'ai réalisé une formation de Développeur Web par
        Openclassrooms qui m'a permis d'obtenir un socle de connaissance solide.
        <br />
        <br />
        J'ai très rapidement été attiré par le côté front-end et plus
        précisement l'univers de React, avec tout ce qui gravite autour. Je
        continue de m’instruire quotidiennement afin de répondre aux besoins de
        ce secteur en constante évolution, je souhaite proposer à court terme
        mes services en applications mobiles avec React-Native.
        <br />
        <br />
        Lors de mon parcours à Openclassrooms et en autodidacte j'ai eu
        l’occasion d’évoluer dans les <strong>technologies suivantes :</strong>
        <br />
        <br />- Front-End : HTML5, SASS/CSS, Tailwind, JavaScript, React, Redux,
        Next.js <br />- Back-End : Node.js, Express, PHP - Bases de données:
        MongoDB, MySQL, Sequelize <br />- CMS: Wordpress, <br />- Autre: Git,
        Jest, React Testing Library <br />
        <br />
        <strong>Mes services :</strong> <br />
        <br />- Développement front-end from scratch,
        <br />- Ajout d’une ou plusieurs pages React.js à votre site existant,
        <br />- Optimisation d'un site web existant,
        <br />- Résolution problème / bug technique,
        <br />- Support technique,
        <br />- Déploiement de l'application web, nom de domaine, <br />
        <br />
        N'hésitez pas à me contacter afin qu'on discute de votre projet ou pour
        tout renseignements complémentaires.
      </p>
      <br />
      <p>
        Je suis ouvert également à toutes autres opportunités, comme un poste{" "}
        <strong>salarié ou alternance.</strong>
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

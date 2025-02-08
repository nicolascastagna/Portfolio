import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import CustomButton from "./generics/CustomButton";
import { ExternalLink } from "lucide-react";

const About = () => {
    return (
        <section className="container-about grid" id="about">
            <h3
                className="grid__title"
                data-aos="zoom-in-up"
                data-aos-duration="600"
            >
                À propos de moi
            </h3>
            <div className="container-about__text">
                <p className="container-about__text-color">
                    <strong>Bonjour, je suis</strong>
                </p>
                <p className="container-about__text-color-grey">
                    Nicolas, développeur Full Stack spécialisé en Symfony et
                    React.
                </p>
                <br />
                <p>
                    Autodidacte, je me suis reconverti dans le développement web
                    en 2021 après une formation initiale. Cette reconversion
                    s’est concrétisée par une alternance en tant que développeur
                    Full Stack, où j’ai acquis une expérience solide dans la
                    conception et le développement d’applications web.
                    <br />
                    <br />
                    Durant ces deux années d'alternance, j'ai contribué à
                    l'ensemble du cycle de développement, intégrant à la fois
                    des aspects back-end et front-end, tout en répondant aux
                    besoins métiers.
                    <br />
                </p>
            </div>
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
                        Télécharger CV
                        <div className="icon-cv">
                            <span className="material-symbols-outlined icon-download">
                                file_download
                            </span>
                        </div>
                    </button>
                </Link>
                <Link smooth to="/#projects">
                    <button
                        className="download-cv"
                        aria-label="Téléchargez mon curriculum vitae"
                    >
                        Voir projets
                        <div className="icon-cv">
                            <span className="material-symbols-outlined icon-download">
                                <ExternalLink />
                            </span>
                        </div>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default About;

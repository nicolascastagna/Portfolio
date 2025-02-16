import React, { useState } from "react";

interface Props {
    project: Project;
}

const CardProject = ({ project }: Props) => {
    const [data, setData] = useState([project]);

    return (
        <div
            className="card-template"
            id="animTemplate"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div className="container-block-title">
                <div className="card-title">
                    <h4>{project.title}</h4>
                </div>
                <div className="card-picture">
                    <img src={project.picture} alt={project.title} />
                </div>
            </div>
            <div className="container-height">
                <div className="card-languages">
                    <h4>Technos utilisées :</h4>
                    <ul className="list-languages">
                        {project.languages
                            ?.filter((lang) => lang !== "All")
                            .map((lang, i) => (
                                <li className="languages" key={i}>
                                    <span>{lang}</span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="card-description">
                    <h4>Objectifs :</h4>
                    <ul className="list-description">
                        {project.description.map((description, i) => (
                            <li className="description" key={i}>
                                - {project.description[i]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="card-container-link">
                {project.github && (
                    <div className="card-git">
                        <button
                            className="git icon-img"
                            onClick={() =>
                                window.open(project.github, "_blank") ||
                                window.location.replace(
                                    project.github as string
                                )
                            }
                        >
                            <img
                                src="./images/icon-github.webp"
                                alt="icon-github"
                            />
                            <span>Code</span>
                        </button>
                    </div>
                )}
                {project.link && (
                    <div className="card-link">
                        {data.map((link, i) => {
                            if (project.link)
                                return (
                                    <button
                                        className="link icon-img"
                                        key={i}
                                        onClick={() => {
                                            window.open(
                                                project.link,
                                                "_blank"
                                            ) ||
                                                window.location.replace(
                                                    project.link as string
                                                );
                                        }}
                                    >
                                        <img
                                            src="./images/icons-link.webp"
                                            alt="icon-link"
                                            key={i}
                                        />
                                        <span>Voir</span>
                                    </button>
                                );
                            <button
                                className="link icon-img"
                                key={i}
                                onClick={() => {
                                    window.open(project.link, "_blank") ||
                                        window.location.replace(
                                            project.link as string
                                        );
                                }}
                            >
                                <img
                                    src="./images/icons-link.webp"
                                    alt="icon-link"
                                />
                                <span>Voir</span>
                            </button>;
                            return null;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardProject;

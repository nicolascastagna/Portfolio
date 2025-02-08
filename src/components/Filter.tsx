import React, { useEffect } from "react";
import { projects } from "../utils/data/data";

interface Props {
    setActiveLanguage: (language: string) => void;
    activeLanguage: string;
    setFiltered: any;
}

function Filter({ setActiveLanguage, activeLanguage, setFiltered }: Props) {
    const languages = [
        "All",
        "Symfony",
        "React",
        "Twig",
        "JavaScript",
        "PHP",
        "CSS",
        "WordPress",
        "PHPUnit",
    ];

    useEffect(() => {
        let sortedProjects = [...projects].sort((a, b) => {
            return new Date(b.year).getTime() - new Date(a.year).getTime();
        });

        if (activeLanguage === "All") {
            setFiltered(sortedProjects);
            return;
        }
        const filtered = sortedProjects.filter((item) =>
            item.languages.includes(activeLanguage)
        );
        setFiltered(filtered);
    }, [activeLanguage]);

    return (
        <div className="filter-container">
            <button
                className={activeLanguage === "All" ? "active" : ""}
                onClick={() => setActiveLanguage("All")}
            >
                All
            </button>
            <button
                className={activeLanguage === "Symfony" ? "active" : ""}
                onClick={() => setActiveLanguage("Symfony")}
            >
                Symfony
            </button>
            <button
                className={activeLanguage === "React" ? "active" : ""}
                onClick={() => setActiveLanguage("React")}
            >
                React
            </button>
            <button
                className={activeLanguage === "Twig" ? "active" : ""}
                onClick={() => setActiveLanguage("Twig")}
            >
                Twig
            </button>
            <button
                className={activeLanguage === "Next.js" ? "active" : ""}
                onClick={() => setActiveLanguage("Next.js")}
            >
                Next.js
            </button>
            <button
                className={activeLanguage === "JavaScript" ? "active" : ""}
                onClick={() => setActiveLanguage("JavaScript")}
            >
                JavaScript
            </button>
            <button
                className={activeLanguage === "PHP" ? "active" : ""}
                onClick={() => setActiveLanguage("PHP")}
            >
                PHP
            </button>
            <button
                className={activeLanguage === "Node.js" ? "active" : ""}
                onClick={() => setActiveLanguage("Node.js")}
            >
                Node.js
            </button>
            <button
                className={activeLanguage === "CSS" ? "active" : ""}
                onClick={() => setActiveLanguage("CSS")}
            >
                CSS
            </button>
            <button
                className={activeLanguage === "SCSS" ? "active" : ""}
                onClick={() => setActiveLanguage("SCSS")}
            >
                SCSS
            </button>
            <button
                className={activeLanguage === "WordPress" ? "active" : ""}
                onClick={() => setActiveLanguage("WordPress")}
            >
                WordPress
            </button>
            <button
                className={activeLanguage === "PHPUnit" ? "active" : ""}
                onClick={() => setActiveLanguage("PHPUnit")}
            >
                PHPUnit
            </button>
            <button
                className={activeLanguage === "Jest" ? "active" : ""}
                onClick={() => setActiveLanguage("Jest")}
            >
                Jest
            </button>
            <button
                className={activeLanguage === "SQL" ? "active" : ""}
                onClick={() => setActiveLanguage("SQL")}
            >
                SQL
            </button>
        </div>
    );
}

export default Filter;

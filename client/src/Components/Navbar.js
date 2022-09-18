import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

  return (
    <nav className="nav-contain">
      <div className="block-nav"></div>
      <ul className={`nav-items ${isOpen && "open"}`}>
        <li>
          <Link smooth to="/#" onClick={() => setIsOpen(!isOpen)}>
            Accueil
          </Link>
        </li>
        <li>
          <Link smooth to="/#about" onClick={() => setIsOpen(!isOpen)}>
            Qui suis-je ?
          </Link>
        </li>
        <li>
          <Link smooth to="/#skills" onClick={() => setIsOpen(!isOpen)}>
            compétences
          </Link>
        </li>
        <li>
          <Link smooth to="#projects" onClick={() => setIsOpen(!isOpen)}>
            projets
          </Link>
        </li>
        <li>
          <Link smooth to="#contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

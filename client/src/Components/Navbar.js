import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="nav-contain">
      <div className="block-nav"></div>
      <ul>
        <li>
          <HashLink smooth to="/#">
            Accueil
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            Qui suis-je ?{" "}
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects">
            Mes projets
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

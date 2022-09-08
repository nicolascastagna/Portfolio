import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="nav-contain">
      <div className="block-nav"></div>
      <ul>
        <li>
          <Link to="/#" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/#about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Qui suis-je ?{" "}
          </Link>
        </li>
        <li>
          <Link
            to="#projects"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Mes projets
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

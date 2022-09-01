import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/about">A propos</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>{" "}
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

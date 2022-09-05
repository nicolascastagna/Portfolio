import React from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import About from "./About";

const Navbar = () => {
  return (
    <nav className="nav-contain">
      <div className="block-nav"></div>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <Link to={<About />}>A propos</Link>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

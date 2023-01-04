import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container-notFound">
      <div className="block-notFound">
        <h4>Page non trouvé !</h4>
        <NavLink to="/">
          <button className="button-notFound">Retour à l'accueil</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;

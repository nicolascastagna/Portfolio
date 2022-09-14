import React from "react";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="text-contain">
          <h2>Bonjour !</h2>
          <h1>Nicolas Castagna</h1>
          <h2>Développeur web</h2>
        </div>
      </div>
      <div className="container picture__container">
        <img src="./images/profil.webp" alt="" />
      </div>
      <div className="scroll-bottom"></div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useInterval } from "react-use";

const Header = () => {
  const frontend = "Front-End".split("");
  const freelance = "Freelance".split("");
  const web = "Web".split("");
  const [items, setItems] = useState(frontend);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  useInterval(
    () => {
      // Anime Front-End
      setItems(frontend);
      setCount(count + 1);

      if (count == 1) {
        setCount(0);
        setItems(freelance);
      }
    },
    play ? 6000 : null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(freelance);
      setPlay(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header id="home">
      <div className="container header__container">
        <div className="text-contain">
          <h3>Bonjour !</h3>
          <h1>Nicolas Castagna</h1>
          <div className="contain-dynamic_text">
            <h2>Développeur</h2>
            <div className="anim-text">
              {items.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
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

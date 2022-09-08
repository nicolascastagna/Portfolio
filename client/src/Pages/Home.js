import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

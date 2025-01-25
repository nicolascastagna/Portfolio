import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <main className="home-container">
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;

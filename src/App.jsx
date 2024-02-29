import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;

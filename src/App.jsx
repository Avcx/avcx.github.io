import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "normalize.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <main className="page-content">
        <Hero />
      </main>
    </>
  );
};

export default App;

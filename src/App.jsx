import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "normalize.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

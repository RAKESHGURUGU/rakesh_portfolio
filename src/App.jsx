import React from "react";
import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Footer from "./footer";
import Projects from "./projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

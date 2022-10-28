import './App.css';
import React from "react";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
  );
}

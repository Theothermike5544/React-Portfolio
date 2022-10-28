import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mike.
            <br className="hidden lg:inline-block" />I love learning to code and building new things!
          </h1>
          <p className="mb-8 leading-relaxed">
           Born and raised in Tampa, FL. I have always had a passion for Tech, Computers, Building Things, and learning new skills. I got involved with computer programming
           back in 2003 when I started to write coding scripts to play my favorite PC game at the time, Diablo 2 Lord of Destruction! Since then, I have dabbled with a multitude of skills sets that allow me to explore what computer software can do.
           May this site serve as a rendition of everything I have learned throughout this bootcamp and beyond!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-gray-400 bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
              Connect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg">
              Examples Of My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./assets/biography.jpg"
          />
        </div>
      </div>
    </section>
  );
}

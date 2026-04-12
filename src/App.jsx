import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar.jsx';
import Hero from './Components/Hero.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Education.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <div className="relative bg-bg text-white min-h-screen overflow-x-hidden">
      {/* Subtle noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Section separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Skills />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Projects />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Education />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Contact />
      </div>
    </div>
  );
}

export default App

// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import Marquee from './components/Marquee';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Bridge, ScrollProgress } from './components/Motion';
import './index.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--paper)] text-[color:var(--fg)]">
        <ScrollProgress />
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        <main>
          <Hero />
          <Bridge from="ink" to="paper" height={120} />
          <Intro />
          <Bridge from="paper" to="paper-2" height={80} />
          <About />
          <Bridge from="paper-2" to="ink" height={120} />
          <Marquee />
          <Experience />
          <Bridge from="ink" to="paper" height={120} />
          <Projects />
          <Bridge from="paper" to="ink" height={120} />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
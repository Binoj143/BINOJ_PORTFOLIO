import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      <div className="cyber-bg-glow" />
      <Navbar />
      <main className="relative w-full z-10 block">
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
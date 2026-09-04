import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberTerminal from './components/CyberTerminal';

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
      <CyberTerminal />
    </div>
  );
}

export default App; // <-- Ensure this line is present at the very end
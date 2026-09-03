import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },    
    { name: 'Projects', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'expertise', 'work', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-6 px-6 py-2.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl shadow-2xl">
        
        {/* Navigation Links */}
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-zinc-800 text-white font-medium shadow-inner'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Status Badge */}
        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-zinc-800/80">
          <a
            href="#contact"
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 font-mono text-[11px] hover:bg-emerald-900/40 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available For Hire</span>
          </a>
        </div>

      </nav>
    </header>
  );
}
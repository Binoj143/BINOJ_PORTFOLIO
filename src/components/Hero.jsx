import React, { useState, useEffect, useCallback } from 'react';
import { FiDownload } from 'react-icons/fi';

const ROLES = [
  'CREATIVE DEVELOPER',
  'FULL STACK DEV',
  'SCALABLE SYSTEMS',
  'SYSTEMS ANALYST'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const handleDownload = useCallback(async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch('/Binoj B Chandran.pdf');
      if (!response.ok) throw new Error('Resume not found');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Binoj_B_Chandran_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);
    } catch {
      window.open('/Binoj_B_Chandran_Resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading]);

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] w-full bg-[#070709] text-white flex flex-col justify-between pt-20 sm:pt-24 pb-8 px-5 sm:px-12 lg:px-20 select-none overflow-hidden"
    >
      {/* Background 360 Turnaround - Shows Full Hair, Face & Suit Coat */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full max-w-lg md:max-w-6xl flex items-center justify-center">
          <img
            src="/images/me.gif"
            alt="Binoj 360 Turnaround"
            className="w-auto h-auto max-h-[82vh] sm:max-h-[88vh] max-w-full object-contain object-center scale-95 sm:scale-105 lg:scale-115 transition-transform duration-500"
            onError={(e) => {
              e.target.src = "/images/my.png";
            }}
          />
        </div>
        {/* Soft edge blend for smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/50 pointer-events-none" />
      </div>

      {/* Floating Foreground Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 my-auto pointer-events-auto">
        
        {/* Left / Top: Greeting & Main Title */}
        <div className="w-full md:max-w-md text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 block mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            HI, I'M BINOJ
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] uppercase drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
            {ROLES[roleIndex]}
          </h1>
        </div>

        {/* Right / Bottom: Specialty Card & Actions */}
        <div className="w-full md:max-w-xs flex flex-col items-center md:items-end text-center md:text-right gap-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
          <div className="p-4 sm:p-0 rounded-2xl sm:rounded-none bg-black/60 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-white/10 sm:border-transparent max-w-sm">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-zinc-400 uppercase block mb-1">
              {'//'} EXPERTISE SCOPE / SPECIALTY
            </span>
            <p className="text-xs sm:text-sm font-mono text-zinc-300 leading-relaxed">
              Available for Full-stack Systems, scalable cloud backends, and responsive modern web architectures.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="px-6 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 backdrop-blur-md text-xs font-mono text-zinc-200 hover:text-white hover:border-zinc-400 transition-all flex items-center gap-2 shadow-2xl active:scale-95"
            >
              <FiDownload size={14} /> {isDownloading ? 'Downloading...' : 'Resume'}
            </button>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-all shadow-2xl active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
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
      className="relative min-h-screen w-full bg-[#070709] text-white flex items-center justify-center px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
    >
      {/* Centered Turnaround Hero Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full h-[85vh] max-w-5xl flex items-center justify-center">
          <img
            src="/images/me.gif"
            alt="Binoj 360 Turnaround"
            className="w-full h-full object-contain md:object-cover scale-110 lg:scale-125 transition-transform duration-700"
            onError={(e) => {
              e.target.src = "/images/my.png";
            }}
          />
        </div>
      </div>

      {/* Floating Foreground Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pointer-events-auto">

        {/* Left Column: Heading & Role */}
        <div className="max-w-md text-left">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 block mb-3">
            HI, I'M BINOJ
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            {ROLES[roleIndex]}
          </h1>
        </div>

        {/* Right Column: Specs & Actions */}
        <div className="max-w-xs md:text-right flex flex-col md:items-end gap-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-zinc-400 uppercase block mb-1">
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
              className="px-6 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 backdrop-blur-md text-xs font-mono text-zinc-200 hover:text-white hover:border-zinc-400 transition-all flex items-center gap-2 shadow-lg"
            >
              <FiDownload size={14} /> {isDownloading ? 'Downloading...' : 'Resume'}
            </button>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-all shadow-lg"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
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
      className="relative h-[100svh] w-full bg-[#070709] text-white flex flex-col justify-between pt-24 pb-6 px-4 sm:px-12 lg:px-20 select-none overflow-hidden"
    >
      {/* Desktop Centered Layer */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
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

      {/* Main Responsive Flow */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Top: Name & Headline */}
        <div className="w-full md:max-w-md text-center md:text-left flex-shrink-0 z-20">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-zinc-400 block mb-1">
            HI, I'M BINOJ
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none uppercase">
            {ROLES[roleIndex]}
          </h1>
        </div>

        {/* Mobile Middle: Dynamically expands to consume vertical gap */}
        <div className="md:hidden w-full flex-1 flex items-center justify-center overflow-hidden my-1 z-10">
          <div className="relative w-full h-full max-h-[50vh] flex items-center justify-center">
            <img
              src="/images/me.gif"
              alt="Binoj 360 Turnaround"
              className="w-full h-full object-contain scale-125 transition-transform duration-300"
              onError={(e) => {
                e.target.src = "/images/my.png";
              }}
            />
          </div>
        </div>

        {/* Bottom: Specialty Description & Action Buttons */}
        <div className="w-full md:max-w-xs flex flex-col items-center md:items-end text-center md:text-right gap-3 flex-shrink-0 z-20 pb-1">
          <div className="max-w-xs">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-zinc-400 uppercase block mb-1">
              {'//'} EXPERTISE SCOPE / SPECIALTY
            </span>
            <p className="text-xs sm:text-sm font-mono text-zinc-300 leading-snug">
              Available for Full-stack Systems, scalable cloud backends, and responsive modern web architectures.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 backdrop-blur-md text-xs font-mono text-zinc-200 hover:text-white hover:border-zinc-400 transition-all flex items-center gap-2 shadow-lg active:scale-95"
            >
              <FiDownload size={13} /> {isDownloading ? 'Downloading...' : 'Resume'}
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-all shadow-lg active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
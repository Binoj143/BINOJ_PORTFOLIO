import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-zinc-900 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Massive Signature Stamp */}
        <h1 className="text-6xl sm:text-9xl font-black text-zinc-600/90 tracking-tighter select-none mb-12 hover:text-zinc-800 transition-colors">
          BINOJ
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-zinc-500 border-t border-zinc-900 pt-8 items-center text-center sm:text-left">
          <div>
            <span className="block text-zinc-400 font-semibold">// Systems Architecture</span>
            <span>{'//'} SYSTEM_STATUS</span>
            Full-Stack Web Engineering
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Opportunities
            </span>
          </div>

          <div className="sm:text-right">
            <a 
              href="mailto:binojbc3315@gmail.com" 
              className="hover:text-white transition-colors"
            >
              binojbc3315@gmail.com[cite: 10]
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
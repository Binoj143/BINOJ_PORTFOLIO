import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#070709] border-t border-zinc-900 text-left">
      <div className="max-w-5xl mx-auto">
        {/* Code Header Decorator */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
          <span>// 0.1</span>
          <span>SYSTEM_PROFILE</span>
        </div>

        {/* Main Bento Dossier Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl backdrop-blur-xl">
          <div className="space-y-4">
            <span className="font-mono text-[11px] text-zinc-500 tracking-widest uppercase block">
              // 0.1 SYSTEM PROFILE
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Hello, I'm Binoj B Chandran
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-3xl pt-1">
              A motivated Full-Stack Developer and Systems Administrator dedicated to building clean, functional, and highly scalable enterprise applications. Specializing in high-performance architectures, intuitive user interfaces, and robust backend pipelines.
            </p>
          </div>

          {/* 3 Metric Tiles (Exact Match to Video 0:08) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-zinc-900">
            <div className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30">
              <div className="text-white font-bold text-base tracking-tight">
                Full-Stack
              </div>
              <div className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase mt-1">
                ARCHITECTURE
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30">
              <div className="text-white font-bold text-base tracking-tight">
                React & Python
              </div>
              <div className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase mt-1">
                CORE TECH
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30">
              <div className="text-emerald-400 font-bold text-base tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available
              </div>
              <div className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase mt-1">
                24/7 REMOTE / ON-SITE
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Credentials Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/40">
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-4">
              // CAREER LOG
            </span>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-semibold text-white">Elite Group Of Companies UAE</h4>
                  <span className="font-mono text-[10px] text-zinc-500">2025 - Present</span>
                </div>
                <div className="font-mono text-xs text-zinc-400">Information Technology Administrator</div>
              </div>
              <div className="pt-2 border-t border-zinc-900">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-semibold text-white">Beinex</h4>
                  <span className="font-mono text-[10px] text-zinc-500">2022</span>
                </div>
                <div className="font-mono text-xs text-zinc-400">Full-Stack Development Intern</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/40">
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-4">
              // ACADEMIC CREDENTIALS
            </span>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-semibold text-white">MCA (Master of Computer Applications)</h4>
                  <span className="font-mono text-[10px] text-zinc-500">2023 – 2025</span>
                </div>
                <div className="font-mono text-xs text-zinc-400">Mar Baselios Institute of Tech & Science</div>
              </div>
              <div className="pt-2 border-t border-zinc-900">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-semibold text-white">BSc Computer Science</h4>
                  <span className="font-mono text-[10px] text-zinc-500">2019 – 2022</span>
                </div>
                <div className="font-mono text-xs text-zinc-400">UIT Alappuzha (Kerala University)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
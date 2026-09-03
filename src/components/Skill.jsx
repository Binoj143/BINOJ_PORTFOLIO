import React from 'react';

const TECH_CATEGORIES = [
  {
    category: 'PORTFOLIO STACK',
    skills: ['React 18', 'Vite', 'Tailwind CSS', 'Netlify', 'Git & GitHub', 'JavaScript (ES6+)']
  },
  {
    category: 'FULL-STACK & CLOUD',
    skills: ['Node.js', 'Express', 'Firebase', 'REST APIs', 'PostgreSQL', 'Docker']
  },
  {
    category: 'SYSTEMS & INFRASTRUCTURE',
    skills: ['FortiGate', 'Network Security', 'Panasonic PBX', 'Yealink VoIP', 'Linux & Shell', 'NAS Storage']
  }
];

export default function Skill() {
  return (
// At the top of Skill.jsx:
<section 
  id="expertise" 
  className="relative w-full bg-[#070709] text-white -mt-16 sm:-mt-20 pt-0 pb-6 px-5 sm:px-12 lg:px-20 select-none overflow-hidden"
>      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-zinc-400 block mb-2">
          {'//'} TECHNICAL STACK
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-3">
          Technologies I Work With
        </h2>
        <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Full-stack expertise across modern web architectures, enterprise infrastructure, and cloud deployment pipelines.
        </p>
      </div>

      {/* Responsive Skill Groups */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {TECH_CATEGORIES.map((group, idx) => (
          <div key={idx} className="flex flex-col items-center">
            
            <span className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase mb-3">
              {group.category}
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-xs sm:text-sm font-mono text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/80 transition-all duration-200 cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {idx < TECH_CATEGORIES.length - 1 && (
              <div className="w-20 h-[1px] bg-zinc-800/80 mt-6" />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
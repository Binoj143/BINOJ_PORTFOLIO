import React from 'react';

const row1 = [
  'Python', 'Angular', 'Flask', 'MySQL', 'JavaScript', 'Docker',
  'Deep Learning', 'PyTorch', 'Git', 'Linux', 'Tailwind CSS'
];

const row2 = [
  'REST APIs', 'Computer Vision', 'Machine Learning', 'Network Security',
  'FortiGate', 'PBX Systems', 'Cloud Deployment', 'SQL Server', 'HTML5', 'TypeScript'
];

export default function Skill() {
  return (
    <section id="skills" className="py-24 bg-[#070709] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <span className="font-mono text-xs text-zinc-500 tracking-[0.3em] uppercase block mb-2">
          // TECHNICAL STACK
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technologies I Work With
        </h2>
        <p className="font-mono text-xs text-zinc-400 mt-2">
          Full-stack expertise across modern web development, artificial intelligence, and cloud infrastructure.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="flex gap-3 whitespace-nowrap overflow-x-auto py-2 no-scrollbar px-6 justify-center">
        {row1.map((item) => (
          <span 
            key={item} 
            className="px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 font-mono text-xs text-zinc-300 hover:border-zinc-500 hover:text-white transition-all shadow-inner"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Marquee Row 2 */}
      <div className="flex gap-3 whitespace-nowrap overflow-x-auto py-3 no-scrollbar px-6 justify-center mt-2">
        {row2.map((item) => (
          <span 
            key={item} 
            className="px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/30 font-mono text-xs text-zinc-400 hover:border-zinc-500 hover:text-white transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
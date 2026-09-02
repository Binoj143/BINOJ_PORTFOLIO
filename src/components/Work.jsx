import React from 'react';
import { FiGithub } from 'react-icons/fi';

const works = [
  {
    num: '01',
    title: 'Text-to-Image Generator',
    desc: 'AI-powered application translating text descriptions into synthesis images through deep learning frameworks. Built with Python and clean interactive UI surfaces.',
    stack: ['Deep Learning', 'Python', 'JavaScript', 'PyTorch'],
    link: 'https://github.com/binoj3211/MainPROJ'
  },
  {
    num: '02',
    title: 'BMI Prediction System',
    desc: 'Computer vision and machine learning tool estimating Body Mass Index using convolutional neural architectures with an interactive Streamlit data interface.',
    stack: ['CNN', 'Streamlit', 'Python', 'Data Analytics'],
    link: 'https://github.com/binoj3211/BMIPREDICTION.git'
  },
  {
    num: '03',
    title: 'Enterprise E-Commerce Replica',
    desc: 'Angular micro-component e-commerce system with shopping cart state persistence, product filtration, and dynamic responsive layouts.',
    stack: ['Angular', 'TypeScript', 'Tailwind', 'Bootstrap'],
    link: 'https://github.com/binoj3211'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 bg-[#070709] border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
          <span>// FEATURED WORK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-12">
          Featured Engineering Projects
        </h2>

        <div className="space-y-6">
          {works.map(({ num, title, desc, stack, link }) => (
            <div
              key={num}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <span className="font-mono text-xs text-zinc-500">
                  // PROJECT {num}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-800 hover:bg-white hover:text-black font-mono text-xs text-zinc-200 transition-all flex items-center gap-2"
                >
                  <FiGithub size={14} /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
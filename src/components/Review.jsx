import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const reviews = [
  {
    name: 'Mentor',
    content: 'Binoj is hardworking, reliable, and always eager to learn and take on complex technical challenges.',
    company: 'BEINEX',
    imgSrc: '/images/beinex.png'
  }
];

export default function Review() {
  return (
    <section id="reviews" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
        <span>// ENDORSEMENTS</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map(({ name, content, company, imgSrc }) => (
          <div
            key={name}
            className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4 mb-4">
              <FiMessageSquare className="text-zinc-500 mt-1 flex-shrink-0" />
              <p className="text-xs text-zinc-300 leading-relaxed italic">
                "{content}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60 font-mono">
              <img
                src={imgSrc}
                alt={company}
                className="w-8 h-8 rounded-full border border-zinc-700 bg-zinc-800 object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="text-xs font-semibold text-white">{name}</div>
                <div className="text-[10px] text-zinc-500">{company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
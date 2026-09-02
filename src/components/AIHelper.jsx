import React, { useState, useCallback, useMemo } from 'react';
import { FiCpu, FiTrash2 } from 'react-icons/fi';

const simpleSummarize = (text) => {
  if (!text) return '';
  const sentences = text
    .replace(/\n+/g, ' ')
    .split(/(?<=[.?!])\s+/)
    .map(s => s.trim())
    .filter(Boolean);

  const keywords = ['manage', 'develop', 'lead', 'admin', 'deploy', 'cloud', 'server', 'database', 'network', 'security', 'automation', 'script', 'optimi', 'maintain', 'support'];

  const score = s => {
    const low = s.toLowerCase();
    let sc = Math.min(1, s.length / 120);
    for (const k of keywords) if (low.includes(k)) sc += 1;
    return sc;
  };

  const ranked = sentences
    .map(s => ({ s, sc: score(s) }))
    .sort((a, b) => b.sc - a.sc)
    .slice(0, 3)
    .map(x => x.s);

  return ranked.map(r => {
    let s = r;
    if (s.length > 130) s = s.slice(0, 127).trim() + '...';
    return '> ' + s;
  }).join('\n');
};

const AIHelper = React.memo(({ initial = '' }) => {
  const [input, setInput] = useState(initial);
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const onSummarize = useCallback(() => {
    if (!input.trim()) return;
    setIsProcessing(true);
    setTimeout(() => {
      setOutput(simpleSummarize(input));
      setIsProcessing(false);
    }, 300);
  }, [input]);

  const onClear = useCallback(() => {
    setInput('');
    setOutput('');
  }, []);

  const canSummarize = useMemo(() => input.trim().length > 15, [input]);

  return (
    <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md">
      <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-1">
        <FiCpu className="text-zinc-300" />
        <span>// AI_PROFILE_SUMMARIZER</span>
      </div>
      <p className="text-xs text-zinc-500 mb-4">
        Paste a job requirement or technical overview to synthesize key vectors.
      </p>

      <textarea
        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-white font-mono text-xs focus:outline-none focus:border-zinc-600 transition-colors resize-none"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste role description or technical spec..."
        rows={4}
      />

      <div className="flex items-center gap-3 mt-3">
        <button 
          className="px-4 py-2 rounded-xl bg-zinc-100 text-black font-mono text-xs font-medium uppercase tracking-wider hover:bg-zinc-300 disabled:opacity-40 transition-all"
          onClick={onSummarize}
          disabled={!canSummarize || isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Summarize'}
        </button>
        <button 
          className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-mono text-xs hover:text-white hover:bg-zinc-800 disabled:opacity-40 transition-all flex items-center gap-1.5"
          onClick={onClear}
          disabled={!input && !output}
        >
          <FiTrash2 size={13} /> Clear
        </button>
      </div>

      {output && (
        <div className="mt-4 pt-4 border-t border-zinc-800/80">
          <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
            PARSED SYNOPSIS
          </label>
          <pre className="font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/60">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
});

AIHelper.displayName = 'AIHelper';
export default AIHelper;
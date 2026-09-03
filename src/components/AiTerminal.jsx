import React, { useState, useRef, useEffect } from 'react';

export default function AiTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'System ready. Ask me anything about Binoj\'s experience, technical stack, or project architecture.' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Server error');
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: data.text }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Connection interrupted. Check backend logs or try again shortly.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono select-none">
      {/* Launch Pill */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950/90 border border-zinc-700/80 text-white hover:border-emerald-500 shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs tracking-wider">AI_ASSISTANT</span>
        </button>
      )}

      {/* Terminal Drawer */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[480px] bg-zinc-950/95 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-300 font-semibold tracking-wider">RECRUITER_COPILOT</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white text-xs px-2 py-0.5 rounded transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2 rounded-xl ${
                    m.sender === 'user'
                      ? 'bg-zinc-800 text-white'
                      : 'bg-zinc-900/90 text-zinc-300 border border-zinc-800'
                  }`}
                >
                  <span className="text-[10px] text-zinc-500 block mb-1">
                    {m.sender === 'user' ? '// YOU' : '// SYSTEM'}
                  </span>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-[11px] text-emerald-400 animate-pulse flex items-center gap-1.5">
                <span>Analyzing dossier...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Prompt Form */}
          <form onSubmit={handleSend} className="p-3 bg-zinc-900/60 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my stack, projects, experience..."
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs rounded-lg transition-colors font-medium cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
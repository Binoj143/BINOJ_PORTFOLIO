import React, { useState, useEffect, useRef } from 'react';

const KNOWLEDGE_BASE = {
  stack: `// SPEC_SHEET // ARCHITECTURE_LOADED
┌─────────────────────────────────────────────────────────┐
│ FRONTEND       : React 18, Vite, Tailwind CSS, Next.js  │
│ BACKEND & DB   : Node.js, Express, REST APIs, SQL       │
│ INFRASTRUCTURE : FortiGate Firewalls, Linux, Networking │
│ TELEPHONY & NAS: PBX (Panasonic/Yealink), Storage Arrays│
└─────────────────────────────────────────────────────────┘
Status: Production-grade enterprise execution.`,

  experience: `// DOSSIER // PROFESSIONAL_TIMELINE
• Designation: IT Administrator & Full-Stack Systems Analyst
• Focus Area : High-availability network operations & custom React architectures
• Domain     : Enterprise ERP integration, secure system telemetry, web platforms
• Philosophy : Resilient backend infra paired with precise, high-performance UI.`,

  education: `// CREDENTIALS // ACADEMIC_RECORDS
┌─────────────────────────────────────────────────────────┐
│ DEGREE   : Master of Computer Applications (MCA)        │
│ DOMAIN   : Computer Science & Systems Engineering       │
│ FOCUS    : Advanced Computing, Software Architecture,   │
│            Database Systems & Enterprise Networking     │
└─────────────────────────────────────────────────────────┘
Status: Verified & Accredited.`,

  projects: `// DEPLOYMENTS // ACTIVE_REPOSITORIES
[01] NEURAL_PORTFOLIO   -> Reactive Cyberpunk HUD Engine (Zero-latency runtime)
[02] RESUME_ARCHITECT   -> ATS-targeted dynamic resume synthesis platform
[03] ENTERPRISE_GATEWAY -> Multi-site routing, firewall topology & ERP interfaces`,

  contact: `// COMMS_CHANNEL // DIRECT_LINK
• Transmission: Available through direct form below
• Protocol    : Open for Full-Stack & Systems Infrastructure roles
• Coordinates : UAE (GST / UTC+4)
[Tap below or use LinkedIn/GitHub channels to connect.]`,

  help: `// DIRECTIVE_INDEX // QUERY_MANIFOLD
Available Directives:
  'stack'       -> Unpack engineering proficiencies & core toolchain
  'experience'  -> Access verified background & enterprise milestones
  'education'   -> Retrieve academic credentials & certifications
  'projects'    -> Review verified production architectures
  'contact'     -> Open secure recruiter contact telemetry
  'clear'       -> Flush local HUD buffer`
};

export default function CyberTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [fps, setFps] = useState(60);
  const [logs, setLogs] = useState([
    {
      sender: 'sys',
      text: `⚡ NEURAL_HUD v5.0.2 [AUTHENTICATED]\nKERNEL: ONLINE | LATENCY: 1ms | CLEARANCE: RECRUITER_VIP\nType 'help' or execute a quick directive below:`
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, isTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(58 + Math.random() * 4));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const streamResponse = (fullText) => {
    setIsTyping(true);
    let index = 0;
    const streamSpeed = 10;

    setLogs((prev) => [...prev, { sender: 'bot', text: '' }]);

    const interval = setInterval(() => {
      index++;
      setLogs((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          sender: 'bot',
          text: fullText.slice(0, index)
        };
        return next;
      });

      if (index >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, streamSpeed);
  };

  const processDirective = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setLogs([]);
      setInput('');
      return;
    }

    setLogs((prev) => [...prev, { sender: 'user', text: cmd }]);
    setInput('');

    let match = KNOWLEDGE_BASE[cleanCmd];

    if (!match) {
      if (cleanCmd.includes('hi') || cleanCmd.includes('hello')) {
        match = `// COMMS_ESTABLISHED\nGreetings. Systems operational. Execute 'stack', 'experience', 'education', or 'projects' to inspect credentials.`;
      } else if (cleanCmd.includes('edu') || cleanCmd.includes('degree') || cleanCmd.includes('qualification') || cleanCmd.includes('study')) {
        match = KNOWLEDGE_BASE.education;
      } else if (cleanCmd.includes('hire') || cleanCmd.includes('job') || cleanCmd.includes('salary')) {
        match = `// RECRUITER_FLAG_DETECTED\nCurrently open for high-impact Full-Stack or Systems roles. Run 'contact' to initiate direct communication.`;
      } else {
        match = `// ERROR_CODE_404: Unknown directive '${cleanCmd}'.\nExecute 'help' to review valid command parameters.`;
      }
    }

    setTimeout(() => streamResponse(match), 120);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTyping || !input.trim()) return;
    processDirective(input);
  };

  return (
    <>
      {/* Floating HUD Launch Capsule */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-3.5 px-4.5 py-3 rounded-2xl bg-zinc-950/80 hover:bg-zinc-900 border border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_45px_rgba(16,185,129,0.45)] backdrop-blur-xl transition-all duration-300 active:scale-95"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <div className="relative flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
            </span>
            <div className="flex flex-col text-left">
              <span className="font-mono text-xs font-bold tracking-widest text-zinc-100 group-hover:text-emerald-300 transition-colors uppercase">
                {isOpen ? 'SHUT_CONSOLE' : 'AI_DOSSIER'}
              </span>
              <span className="font-mono text-[9px] text-zinc-400">
                {isOpen ? 'ACTIVE // RUNNING' : 'STATUS // ONLINE'}
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-md border border-emerald-500/30">
              v5.0
            </span>
          </div>
        </button>
      </div>

      {/* Cyber Glassmorphic Terminal Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[94vw] sm:w-[480px] h-[560px] max-h-[82vh] z-50 flex flex-col rounded-2xl bg-zinc-950/95 border border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.3)] backdrop-blur-2xl overflow-hidden font-mono select-none">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] z-20 opacity-30"></div>

          {/* Header Bar */}
          <div className="relative flex items-center justify-between px-4 py-3 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 via-zinc-900/50 to-zinc-950/80 z-10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              </div>
              <span className="ml-2 text-xs font-bold tracking-wider text-emerald-300">
                AI_DOSSIER // SYS_CORE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] text-zinc-400 bg-zinc-900/80 border border-zinc-700/50 px-2 py-0.5 rounded">
                SYS: {fps} FPS
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-rose-400 text-xs transition-colors px-1"
                aria-label="Close HUD"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Directive Shortcut Chips */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-emerald-500/10 bg-zinc-900/40 overflow-x-auto z-10 scrollbar-none text-[11px]">
            {['stack', 'experience', 'education', 'projects', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                disabled={isTyping}
                onClick={() => processDirective(cmd)}
                className="px-2.5 py-1 rounded-md bg-zinc-900/90 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-400/60 text-zinc-300 hover:text-emerald-300 shadow-sm transition-all active:scale-95 whitespace-nowrap"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Log Canvas */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs leading-relaxed text-zinc-200 z-10 scrollbar-thin scrollbar-thumb-emerald-500/20 select-text">
            {logs.map((log, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  log.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <span className="text-[9px] tracking-wider text-zinc-400 uppercase mb-1">
                  {log.sender === 'user' ? '» USER_DISPATCH' : '» TELEMETRY_RESPONSE'}
                </span>
                <div
                  className={`p-3.5 rounded-xl max-w-[92%] whitespace-pre-wrap ${
                    log.sender === 'user'
                      ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'bg-zinc-900/90 border border-zinc-800/80 text-zinc-300 shadow-inner'
                  }`}
                >
                  {log.text}
                  {log.sender === 'bot' && isTyping && i === logs.length - 1 && (
                    <span className="inline-block w-2 h-3.5 bg-emerald-400 ml-1.5 animate-pulse shadow-[0_0_8px_#10b981]" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-emerald-500/20 bg-zinc-950 z-10 flex gap-2.5 items-center"
          >
            <div className="flex items-center gap-1 pl-1">
              <span className="text-emerald-400 font-bold text-sm">λ</span>
              <span className="text-zinc-600 text-xs">&gt;</span>
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isTyping ? 'Receiving telemetry buffer...' : 'Type directive or message...'}
              disabled={isTyping}
              className="flex-1 bg-transparent border-none outline-none text-emerald-300 text-xs placeholder:text-zinc-400 font-mono tracking-wide"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 text-xs font-bold tracking-wider transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none shadow-[0_0_15px_rgba(16,185,129,0.15)] active:scale-95"
            >
              RUN
            </button>
          </form>
        </div>
      )}
    </>
  );
}
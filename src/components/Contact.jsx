import React, { useState } from 'react';
import { FiSend, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:binojbc3315@gmail.com?subject=Contact%20from%20${encodeURIComponent(
      formData.firstName + ' ' + formData.lastName
    )}&body=${encodeURIComponent(formData.message + '\n\nSender: ' + formData.email)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#070709] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase block mb-2">
          // LIVE DISPATCH MODE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12">
          Let's Build Something Exceptional.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive JSON Stream & Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl border border-zinc-800/90 bg-black/60 font-mono text-xs text-zinc-400">
              <div className="text-zinc-600 text-[11px] mb-3 pb-2 border-b border-zinc-800/80">
                // payload_preview.json
              </div>
              <pre className="text-[12px] leading-relaxed text-zinc-300 overflow-x-auto">
{`{
  "sender": "${formData.firstName || formData.lastName ? `${formData.firstName} ${formData.lastName}`.trim() : '[Awaiting Name]'}",
  "email": "${formData.email || '[Awaiting Email]'}",
  "message": "${formData.message ? formData.message.replace(/"/g, '\\"') : '[Awaiting Message]'}"
}`}
              </pre>
            </div>

            {/* Social Direct Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/binoj-b-chandran-a663b9248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 font-mono text-xs hover:border-zinc-600 hover:text-white transition-all"
              >
                <FiLinkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/in_ce_pt_ion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 font-mono text-xs hover:border-zinc-600 hover:text-white transition-all"
              >
                <FiInstagram size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-white font-mono text-xs focus:outline-none focus:border-zinc-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-white font-mono text-xs focus:outline-none focus:border-zinc-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-white font-mono text-xs focus:outline-none focus:border-zinc-500"
            />

            <textarea
              name="message"
              placeholder="Type your message here..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-white font-mono text-xs focus:outline-none focus:border-zinc-500 resize-none"
            />

            <button
              type="submit"
              className="self-end px-7 py-3 rounded-full bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              <FiSend size={13} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('FATAL: GEMINI_API_KEY is not defined in environment variables.');
    return res.status(500).json({ error: 'Server configuration error: missing API key.' });
  }

  // Robust body parsing for Vercel Node runtime
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const prompt = body?.prompt;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing prompt field in request body.' });
  }

  const SYSTEM_INSTRUCTION = `
You are the personal AI Recruiter Copilot on Binoj Balachandran's portfolio website (binojbalachandran.com).
Your role is to answer questions from recruiters, hiring managers, and clients concisely, professionally, and accurately.

Dossier:
- Name: Binoj Balachandran
- Profession: Full-Stack Developer & Systems Administrator
- Location: UAE
- Education: MCA (Master of Computer Applications), BSc Computer Science
- Core Tech Stack: React, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Docker, REST APIs, Git & GitHub
- Systems & Infrastructure: FortiGate Firewalls, Network Security, Panasonic PBX, Yealink VoIP, Linux/Shell, NAS Storage
- Experience: Enterprise resource planning workflows, IT infrastructure administration, scalable web applications

Rules:
- Keep answers tight, technical, and confident (2 to 4 sentences maximum).
- Never fabricate skills or background outside this dossier.
- For hiring or meeting inquiries, guide the user to the contact section on the site.
`;

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error('Gemini Execution Error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal AI generation failure.' 
    });
  }
}
import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on server.' });
  }

  const ai = new GoogleGenAI({ apiKey });

  const SYSTEM_INSTRUCTION = `
You are the AI Recruiter Copilot on Binoj Balachandran's portfolio website (binojbalachandran.com).
Answer questions from recruiters, hiring managers, and clients concisely, professionally, and accurately.

Dossier:
- Name: Binoj Balachandran
- Profession: Full-Stack Developer & IT Systems Administrator
- Location: UAE
- Education: MCA (Master of Computer Applications), BSc Computer Science
- Core Tech Stack: React 18, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Docker, REST APIs, Git & GitHub
- Infrastructure & Systems: FortiGate Firewalls, Network Security, Panasonic PBX, Yealink VoIP, Linux & Shell, NAS Storage
- Experience: Full-stack web development and corporate enterprise systems administration

Rules:
- Keep answers tight and technical (2 to 4 sentences maximum).
- Never invent experience outside this dossier.
- For hiring, interviews, or project inquiries, politely refer visitors to the contact form on the website.
`;

  try {
    const { prompt } = req.body || {};
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'A text prompt is required.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error('Gemini API execution error:', error);
    return res.status(500).json({ error: 'AI processing failed. Please try again.' });
  }
}
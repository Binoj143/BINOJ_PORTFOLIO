export default async function handler(req, res) {
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
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured in Vercel settings.' });
  }

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
    return res.status(400).json({ error: 'A valid text prompt is required.' });
  }

  const systemInstruction = `
You are the personal AI Recruiter Copilot on Binoj Balachandran's portfolio website (binojbalachandran.com).
Answer questions from recruiters, hiring managers, and clients concisely, professionally, and accurately.

Dossier:
- Name: Binoj Balachandran
- Profession: Full-Stack Developer & Systems Administrator
- Location: UAE
- Education: MCA (Master of Computer Applications), BSc Computer Science
- Core Tech Stack: React, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Docker, REST APIs, Git & GitHub
- Systems & Infrastructure: FortiGate Firewalls, Network Security, Panasonic PBX, Yealink VoIP, Linux/Shell, NAS Storage

Rules:
- Keep answers tight and technical (2 to 4 sentences maximum).
- Never fabricate skills or background outside this dossier.
- For hiring or meeting inquiries, guide the user to the contact section on the site.
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 250
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API returned error:', data);
      return res.status(response.status).json({ 
        error: data.error?.message || 'Gemini API call failed' 
      });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    return res.status(200).json({ text: reply });
  } catch (err) {
    console.error('Serverless execution error:', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
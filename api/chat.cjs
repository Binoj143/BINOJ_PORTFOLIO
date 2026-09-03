module.exports = async (req, res) => {
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
    return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is not defined.' });
  }

  let prompt = '';
  try {
    const parsed = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    prompt = parsed?.prompt || '';
  } catch (e) {
    prompt = '';
  }

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt parameter.' });
  }

  const systemInstruction = "You are the AI Recruiter Copilot on Binoj Balachandran's portfolio. Respond concisely (2-3 sentences), professionally, highlighting Binoj's skills in Full-Stack Engineering (React, Node.js) and IT Infrastructure.";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || 'Gemini API call failed.'
      });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    return res.status(200).json({ text: reply });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Server execution failed.' });
  }
};
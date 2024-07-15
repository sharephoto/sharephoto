import { VercelRequest, VercelResponse } from '@vercel/node';
import { VercelAuth } from '@vercel/auth';

const auth = new VercelAuth();

export default async function handler(req, res) {
  const { email, password } = req.body;
  try {
    const user = await auth.signInWithPassword({ email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
}

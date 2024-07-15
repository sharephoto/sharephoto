import { VercelRequest, VercelResponse } from '@vercel/node';
import { VercelStorage } from '@vercel/storage';

const storage = new VercelStorage();

export default async function handler(req, res) {
  const file = req.files.file;
  const fileName = `${Date.now()}_${file.name}`;
  try {
    const fileUrl = await storage.upload(fileName, file);
    // Save metadata to a JSON file or database (if needed)
    res.status(200).json({ url: fileUrl });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
}

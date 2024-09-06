import path from 'path';
import { parseCSV } from '../';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'data.csv');

  try {
    const records = await parseCSV(filePath);
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to parse CSV file' });
  }
}

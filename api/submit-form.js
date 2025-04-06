// filepath: /Users/rengin/Desktop/who-am-i/api/submit-form.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const submissionsPath = path.join(process.cwd(), 'data', 'submissions.json');
    const newSubmission = { name, email, message, date: new Date() };

    // Save to JSON file
    fs.readFile(submissionsPath, 'utf8', (err, data) => {
      if (err && err.code !== 'ENOENT') {
        return res.status(500).json({ error: 'Failed to read submissions file.' });
      }

      const submissions = data ? JSON.parse(data) : [];
      submissions.push(newSubmission);

      fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to save submission.' });
        }

        res.status(200).json({ message: 'Form submitted successfully!' });
      });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
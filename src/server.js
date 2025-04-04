const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // CORS paketini ekledik

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // CORS middleware'i burada kullanılıyor
app.use(express.static(path.join(__dirname, '../public')));

// Form verilerini işleme
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const submissionsPath = path.join(__dirname, '../data/submissions.json');
    const newSubmission = { name, email, message, date: new Date() };

    // JSON dosyasına kaydet
    fs.readFile(submissionsPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read submissions file.' });
        }

        const submissions = data ? JSON.parse(data) : [];
        submissions.push(newSubmission);

        fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save submission.' });
            }

            res.json({ message: 'Form submitted successfully!' });
        });
    });
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Example: GET /data/sample.json will serve ./data/sample.json from project root
app.get('/data/:filename', (req, res) => {
    const folder = req.params.filename.replace(/\.json$/, ''); // Remove .json extension for security
    const filePath = path.join(
        __dirname,
        '..',
        'data',
        folder,
        `${folder}.json`
    );
    console.log(filePath);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).json({ error: 'File not found' });
        } else {
            res.type('application/json').send(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

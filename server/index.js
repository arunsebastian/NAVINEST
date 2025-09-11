import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;


// Custom CORS middleware
app.use((req, res, next) => {
    // Allow requests from localhost:3000
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // Allow specific headers
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Allow credentials (cookies, HTTP authentication) to be sent with the request
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Handle preflight requests (OPTIONS method)
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});


// Example: GET /data/property_id/images/'<image>.png/jpeg' will serve the images
app.use('/data/:property_id/images/:image', (req, res) => {
    const folder = req.params.property_id;
    const imagename = req.params.image;
    const imagePath = path.join(
        __dirname,
        '..',
        'data',
        folder,
        'images',
        imagename
    );
   
    // Send the file
    res.sendFile(imagePath, (err) => {
        if (err) {
            console.error('Error serving image:', err);
            if (err.code === 'ENOENT') {
                res.status(404).send('Image not found.');
            } else {
                res.status(500).send('Internal server error.');
            }
        }
    });
});


// Example: GET /data/:property_id 

app.get('/data/:property_id', (req, res) => {
    const folder = req.params.property_id;
    const filePath = path.join(
        __dirname,
        '..',
        'data',
        folder,
        'manifest.json'
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
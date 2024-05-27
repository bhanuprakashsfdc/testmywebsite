const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Define the validate-url route
app.post('/api/validate-url', (req, res) => {
    let { url } = req.body;
    // Ensure the URL includes a protocol
    if (!/^https?:\/\//i.test(url)) {
        url = 'http://' + url;
    }
    res.json({ validUrl: url });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Export app for testing

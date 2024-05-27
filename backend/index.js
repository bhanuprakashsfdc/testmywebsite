const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001; // Default to 3001 unless specified in environment variables

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS for all requests, adjust as needed for production

// Import route handlers
const emulationRoutes = require('./src/routes/emulationRoutes');

// Use routes
app.use('/api', emulationRoutes); // Prefix all API routes with '/api'

// Basic route for testing if the server is up
app.get('/', (req, res) => {
  res.send('Hello, your server is running and ready to receive requests!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

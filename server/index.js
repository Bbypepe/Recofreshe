// Importing necessary modules
const express = require('express');
const cors = require('cors'); // For Cross-Origin Resource Sharing
const bodyParser = require('body-parser'); // For parsing incoming request bodies
const dataRoutes = require('./routes/dataRoutes'); // Importing data routes
const authMiddleware = require('./middleware/auth'); // Importing authentication middleware

// Initializing the Express application
const app = express();

// Setting the server port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(authMiddleware); // Apply authentication middleware (if required)

// Defining routes
app.use('/api', dataRoutes); // All routes starting with /api will use the dataRoutes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

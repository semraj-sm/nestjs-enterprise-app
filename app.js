// Main Express app setup
const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

// Error handler middleware
app.use(errorHandler);

module.exports = app;

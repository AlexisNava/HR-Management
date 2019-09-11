const { join } = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware Configuration
app.use(cors());

// Static folder
app.use(express.static(join(__dirname, 'build')));

// Render React App
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

module.exports = app;

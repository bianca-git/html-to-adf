// src/index.js

const express = require(`express`);
const fs = require(`fs`);
const path = require(`path`);
const app = express();

// Serve static files
app.use(express.static(`public`));

// Read index.html content
const indexHtml = fs.readFileSync(path.join(__dirname, `index.html`), `utf-8`);

// Landing Page
app.get(`/`, (req, res) => {
  res.send(indexHtml);
});

module.exports = app;

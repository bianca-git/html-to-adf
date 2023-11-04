require(`dotenv`).config();
const express = require(`express`);
const { convert } = require(`./utils/htmltoadf`);
const app = require(`./index`);
const port = process.env.PORT || 3000;

// Middleware to handle text/html content type
app.use(express.text({ type: `text/html` }));
app.use(express.static(`public`));

// Middleware for API security
app.use((req, res, next) => {
  const apiSecret = req.headers[`x-api-secret`];
  if (apiSecret !== process.env.API_SECRET) {
    return res.status(403).json({ error: `Unauthorized` });
  }
  next();
});

// POST endpoint
app.post(`/convert`, (req, res) => {
  const html = req.body;

  // Check if HTML content is available
  if (!html) {
    return res.status(400).send(`HTML code is required`);
  }

  try {
    const converted = convert(html);
    console.log(`Converted HTML: ${converted}`);
    res.json(JSON.parse(converted));
  } catch (error) {
    console.error(`Conversion failed: ${error}`);
    res.status(500).json({ error: `Conversion failed`, details: error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on ${process.cwd()}:${port}`);
});

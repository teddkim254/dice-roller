const express = require('express');// calls the server to serve😅
const app = express();

const PORT = 3000;

// Home route (optional), just friendly message to guide user to 'path'
app.get('/', (req, res) => {
  res.send('🎲 Dice Roller! Use /roll?faces=6&count=1 to roll dice.');
});//use res.redirect to land to specific 'service'

// Universal dice roller: d6, d20, dANY
app.get('/roll', (req, res) => {
  // Read query parameters
  const faces = parseInt(req.query.faces) || 6;  // default = 6-sided
  const count = parseInt(req.query.count) || 1;  // default = 1 die

  // Create an array of rolls
  const rolls = Array.from({ length: count }, () =>
    Math.floor(Math.random() * faces) + 1
  );

  // Calculate total sum, of result in current array
  const total = rolls.reduce((a, b) => a + b, 0);

  // Send pretty JSON response, cleaner
  res.json({
    faces: faces, 
    count: count, 
    rolls: rolls, 
    total: total
  }, null, 2);
});

// Start server or tap into
app.listen(PORT, () => console.log(`🎲 Dice API at http://localhost:${PORT}`));

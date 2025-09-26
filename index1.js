const express = require('express');// calls the server to serve😅
const app = express();


const PORT = 3000;


// Home route/message/redirect (optional)
app.get('/', (req, res) => {
  res.redirect('/roll');
});


// Universal dice roller: d6, d20, dANY
app.get('/roll', (req, res) => {
  //reads query parameters
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

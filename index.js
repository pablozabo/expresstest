// index.js
const express = require('express');
const app = express();

// Important: use process.env.PORT (Azure uses this)
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
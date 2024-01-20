
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello, Express, I am here to test how this works lets gooo!!!!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
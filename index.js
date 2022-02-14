require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

const lisPort = process.env.PORT || 3023;
app.listen(lisPort, () => {
  console.log(`Server is listening on port ${lisPort}`);
});
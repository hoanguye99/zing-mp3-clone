require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.use('/user', userRoutes);

const lisPort = process.env.PORT || 3023;
app.listen(lisPort, () => {
  console.log(`Server is listening on port ${lisPort}`);
});
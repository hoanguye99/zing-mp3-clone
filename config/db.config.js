const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/zing-mp3', {useNewUrlParser: true}, (err) => {
  if (err) console.error(err);
  console.log('Connected to database: zing-mp3');
});
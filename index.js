require('./config/db.config');
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var multer = require('multer');
var forms = multer();
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(forms.array()); 

app.use(express.static('./views'));
app.set('view engine', 'ejs');
app.set('views', './views');

global.loggedIn = null;

// const BlogPost = require('./models/BlogPost');
// BlogPost.find({}, (err, blogposts) => {
//   if (err) console.error(err);
//   console.log(blogposts);
// });

app.get(['/', '/index'], (req, res, next) => {
  res.render('index', {data : 'Yeppi Yeppi!'});
});

app.get('/post', (req, res, next) => {
  res.render('post', {data : 'Happy Virus'});
});

app.use('/user', userRoutes);

const lisPort = process.env.PORT || 3023;
app.listen(lisPort, () => {
  console.log(`Server is listening on port ${lisPort}`);
});
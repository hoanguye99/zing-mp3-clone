require('./config/db.config');
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var multer = require('multer');
var forms = multer();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const expressSession = require('express-session');
const postController = require('./controller/postController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(forms.array()); 

app.use(express.static('./views'));
app.set('view engine', 'ejs');
app.set('views', './views');

global.loggedIn = null;

app.use(expressSession({
  secret: 'My own app\'s secrete'
}))

app.use('*' , (req, res, next) => {
  loggedIn = req.session.userId;
  next();
})

// const BlogPost = require('./models/BlogPost');
// BlogPost.find({}, (err, blogposts) => {
//   if (err) console.error(err);
//   console.log(blogposts);
// });

app.get(['/', '/index'], postController.getAllPosts);

app.get('/zing-index', (req, res, next) => {
  res.render('zing-index');
});
// app.get('/post', (req, res, next) => {
//   res.render('post', {data : 'Happy Virus'});
// });

app.use('/user', userRoutes);
app.use('/post', postRoutes);

const lisPort = process.env.PORT || 3023;
app.listen(lisPort, () => {
  console.log(`Server is listening on port ${lisPort}`);
});
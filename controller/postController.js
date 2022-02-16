const BlogPost = require('../models/BlogPost');

module.exports.createPost = (req, res, next) => {
  // const {title, body} = req.body;
  try {
    BlogPost.create(req.body, (err, user) => {
      console.log(req.body);
      res.redirect('/')
    });
  } catch(err) {
    res.redirect('/post/create')
    console.error(err);
  }
}

module.exports.getAllPosts = (req, res, next) => {
  // const {title, body} = req.body;
  try {
    BlogPost.find({}, (err, posts) => {
      res.render('index', {posts : posts});
    });
  } catch(err) {
    console.error(err);
  }
}

module.exports.getPostById = (req, res, next) => {
  // const {title, body} = req.body;
  try {
    BlogPost.findById(req.params.id, (err, post) => {
      res.render('post', {post : post});
    });
  } catch(err) {
    console.error(err);
  }
}

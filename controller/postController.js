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

module.exports.deletePost = (req, res, next) => {
  try {
    BlogPost.deleteOne({ _id : req.body.post_id}, (err, user) => {
      res.redirect('/')
    });
  } catch(err) {
    res.redirect('/')
    console.error(err);
  }
}

module.exports.getAllPosts = (req, res, next) => {
  // const {title, body} = req.body;
  try {
    BlogPost.find({}, (err, posts) => {
      res.render('zing-index', {posts : posts});
    });
  } catch(err) {
    console.error(err);
  }
}

module.exports.getPostById = (req, res, next) => {
  // const {title, body} = req.body;
  try {
    if (req.originalUrl.split('/').includes('update')) {
      BlogPost.findById(req.params.id, (err, post) => {
        res.render('zing-update', {post : post});
      });
    } else {
     BlogPost.findById(req.params.id, (err, post) => {
        res.render('zing-post', {post : post});
      });
    }
  } catch(err) {
    console.error(err);
  }
}

module.exports.updatePostById = (req, res, next) => {
  // const {title, body} = req.body;
  try {
    BlogPost.findOneAndUpdate({ _id : req.body.id}, req.body, (err, post) => {
      res.redirect('/');
    });
  } catch(err) {
    res.redirect('/');
    console.error(err);
  }
}

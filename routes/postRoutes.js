const express = require('express')
const router = express.Router()
const postController = require('../controller/postController');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/create', (req, res, next) => {
  console.log('7 rings 7 rings7 rings7 rings7 rings7 rings7 rings7 rings7 rings7 rings');
  res.render('create');
});

router.get('/:id', postController.getPostById);


router.post('/create', postController.createPost);


module.exports = router;
const express = require('express')
const router = express.Router()
const postController = require('../controller/postController');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/create', (req, res, next) => {
  res.render('zing-create');
});

router.get('/:id', postController.getPostById);


router.post('/create', postController.createPost);

router.get('/update/:id', postController.getPostById);

router.post('/update', postController.updatePostById);

router.post('/delete', postController.deletePost);


module.exports = router;
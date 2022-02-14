const express = require('express')
const router = express.Router()
const userController = require('../controller/userController');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', userController.handleRegister);

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', userController.handleLogin);

router.get('/logout', userController.handleLogout);


module.exports = router;
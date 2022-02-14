const bcrypt = require('bcrypt');
const saltRounds = 10;

const AccountUser = require('../models/AccountUser');

module.exports.handleRegister = (req, res, next) => {
  const {username, password} = req.body;
  try {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      AccountUser.create({
        username: username,
        password: hash
      }, (err, user) => {
        res.redirect('/user/login')
      })
    });
  } catch(err) {
    res.redirect('/user/register')
    console.error(err);
  }
}

module.exports.handleLogin = (req, res, next) => {
  const {username, password} = req.body;
  try {
    AccountUser.findOne({username: username}, (err, account) => {
      if (account) {
        bcrypt.compare(password, account.password, function(err, result) {
          if(result) {
            loggedIn = true;
            res.redirect('/index');
          } else {
            res.redirect('/user/login');
          }
        });
      } else {
        res.redirect('/user/login');
      }
    });
  } catch(err) {
    console.log('catch reached');
    res.redirect('/user/login');
  }
}

module.exports.handleLogout = (req, res, next) => {
  loggedIn = false;
  res.redirect('/');
}

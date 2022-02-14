const mongoose = require('mongoose');

const AccountUserSchema = new mongoose.Schema({
  username: String,
  password: String
});

const AccountUser = mongoose.model('AccountUser', AccountUserSchema);
module.exports = AccountUser;
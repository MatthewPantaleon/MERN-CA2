/**
 * @Date:   2020-01-21T13:51:45+00:00
 * @Last modified time: 2020-02-04T12:36:56+00:00
 */

const StringRequired = {
  type: String,
  required: true,
  default: ''
};

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: StringRequired,
  email: StringRequired,
  password: StringRequired,
});


UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('User', UserSchema, "users_c");
module.exports = User;

/**
 * @Date:   2020-01-21T13:51:45+00:00
 * @Last modified time: 2020-02-06T13:02:55+00:00
 */

const StringRequired = {
  type: String,
  required: true,
};

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: StringRequired,
  email: StringRequired,
  password: StringRequired,
  company_id: String
});


UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('User', UserSchema, "users_c");
module.exports = User;

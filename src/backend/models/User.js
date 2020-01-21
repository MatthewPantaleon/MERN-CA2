/**
 * @Date:   2020-01-21T13:51:45+00:00
 * @Last modified time: 2020-01-21T14:08:41+00:00
 */

const StringRequired = {
  type: String,
  required: true
};

 const mongoose = require("mongoose");
 const UserSchema = new mongoose.Schema({
   username: StringRequired,
   email: StringRequired,
   password: StringRequired,
   company_id: {
     type: String,
     default: null
   }
 });

 const User = mongoose.model('User', UserSchema, "users_c");
 module.exports = User;

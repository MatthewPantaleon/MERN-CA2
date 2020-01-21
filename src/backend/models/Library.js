/**
 * @Date:   2020-01-21T13:58:52+00:00
 * @Last modified time: 2020-01-21T14:12:06+00:00
 */

 const mongoose = require("mongoose");
 const LibrarySchema = new mongoose.Schema({
   user_id: {
     type: String,
     required: true,
     unique: true
   },
   games:{
     type: Array
   }
 });

 const Library = mongoose.model('Library', UserSchema, "libraries_c");
 module.exports = Library;

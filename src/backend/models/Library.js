/**
 * @Date:   2020-01-21T13:58:52+00:00
 * @Last modified time: 2020-02-06T14:30:14+00:00
 */

 const mongoose = require("mongoose");
 const LibrarySchema = new mongoose.Schema({
   user_id: {
     type: String,
     required: true,
     unique: true
   },
   games:[{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Game"
   }]
 });

 const Library = mongoose.model('Library', LibrarySchema, "libraries_c");
 module.exports = Library;

/**
 * @Date:   2020-01-21T13:58:52+00:00
 * @Last modified time: 2020-02-13T18:21:48+00:00
 */

 const mongoose = require("mongoose");
 const LibrarySchema = new mongoose.Schema({
   user_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "User"
   },
   games:[{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Game",
     unique: true
   }]
 });

 const Library = mongoose.model('Library', LibrarySchema, "libraries_c");
 module.exports = Library;

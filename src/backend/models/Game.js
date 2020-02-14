/**
 * @Date:   2020-01-21T13:30:30+00:00
 * @Last modified time: 2020-02-14T17:22:57+00:00
 */

 const mongoose = require("mongoose");
 const GameSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true
   },
   description: String,
   price: {
     type: String,
     required: true
   },
   genres: {
     type: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Genre"
     }],
     required: true
  },
   libraries: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Library"
   }]
 });

 const Game = mongoose.model('Game', GameSchema, "games_c");
 module.exports = Game;

/**
 * @Date:   2020-01-21T13:30:30+00:00
 * @Last modified time: 2020-02-06T18:50:04+00:00
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
   genres: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Genre"
   }],
   libraries: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Library"
   }]
 });

 const Game = mongoose.model('Game', GameSchema, "games_c");
 module.exports = Game;

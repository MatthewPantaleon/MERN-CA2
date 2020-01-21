/**
 * @Date:   2020-01-21T13:30:30+00:00
 * @Last modified time: 2020-01-21T13:38:06+00:00
 */

 const mongoose = require("mongoose");
 const GameSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true
   },
   image: {
     type: String,
     require: true
   },
   description: String,
   price: {
     type: Number,
     required: true
   }
 });

 const Game = mongoose.model('Game', GameSchema, "games_c");
 module.exports = Game;

/**
 * @Date:   2020-01-21T10:45:52+00:00
 * @Last modified time: 2020-02-06T14:25:40+00:00
 */

const mongoose = require("mongoose");
const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game"
  }]
});

const Genre = mongoose.model('Genre', GenreSchema, "genres_c");
module.exports = Genre;

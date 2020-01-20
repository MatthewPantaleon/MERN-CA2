/**
 * @Date:   2020-01-14T10:25:20+00:00
 * @Last modified time: 2020-01-14T10:38:09+00:00
 */

const mongoose = require("mongoose");
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
const MovieSchema = new mongoose.Schema({
  db_id: {
    type: String,
    required: true,
    unique: true,
  },
  title:{
    type: String,
    required: true,
  },
  genre: {
    type: [genreSchema],
    // required: true
  }
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;

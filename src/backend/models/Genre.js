/**
 * @Date:   2020-01-21T10:45:52+00:00
 * @Last modified time: 2020-01-21T13:27:02+00:00
 */

const mongoose = require("mongoose");
const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String
});

const Genre = mongoose.model('Genre', GenreSchema, "genres_c");
module.exports = Genre;

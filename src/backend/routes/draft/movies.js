/**
 * @Date:   2020-01-14T10:40:16+00:00
 * @Last modified time: 2020-01-14T11:43:47+00:00
 */

const router = require("express").Router();

let Movie = require('../models/Movie');

router.route('/').get((req, res) => {
  // console.log(" U Gud Fam");

  res.json({message: "U Gud Fam"});
});

router.get("/movies", (req, res) => {
  // console.log("Movies Fam");
  // res.json({message: "Movies Fam"});
  Movie.find().then(movies => res.json(movies)).catch(err => res.status(400).json({message: "Error: " + err}));

});
router.get("/:id", (req, res) => {
  const movieId = req.params.id;
  res.json({message: "Movie Number: " + movieId});

  // const movie = data.find(currentMovie => currentMovie.id === movieId);

});
router.post("", (req, res) => {
  const newMovie = req.body;
  // res.json({message: "New Movie Fam", thing: newMovie});
  const newNewMovie = new Movie(newMovie);
  newNewMovie.save().then(() => res.json({message: "New Movie Fam for realzies"})).catch(err => res.status(400).json({message: "Error: " + err}));
});
router.put("/:id", (req, res) => {
  const movieId = req.params.id;
  // const movie = req.body;
  res.json({message: "put that: " + movieId});
});
router.delete("/:id", (req, res) => {
  const movieId = req.params.id;
  res.json({message: "delete that: " + movieId});
});

module.exports = router;

/**
 * @Date:   2020-01-13T09:46:53+00:00
 * @Last modified time: 2020-01-20T11:27:31+00:00
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 9001;
const body_parser = require("body-parser");
const moviesRouter = require("./routes/movies");

const uri = process.env.atlas_URI;

app.use(body_parser.json());
app.use(cors());

app.use(moviesRouter);
app.use('/movies', moviesRouter);



mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.json({message: "U Gud Fam"});
});
app.use('/movies', moviesRouter);

app.listen(port, () => {
  console.log(`Server Listening on: ${port}`);
  // console.log(connection);
});


//
// // let data = require(__dirname + '/movies.json');
//
// app.get("/movies", (req, res) => {
//   res.json(data);
// });
//
// app.get("/movies/:id", (req, res) => {
//   const movieId = req.params.id;
//   const movie = data.find((_movie) => _movie.id == movieId);
//
//   if(movie){
//     res.json(movie);
//   }else{
//     res.json({message: `Movie ${movieId} does not Exist!`});
//   }
// });
//
//
// app.post("/movies", (req, res) => {
//   const movie = req.body;
//   console.log("Adding New Movie: " , movie);
//   data.push(movie);
//
//   res.json(data);
// });
//
//
// app.put("/movies/:id", (req, res) => {
//   const movieId = req.params.id;
//   const movie = req.body;
//
//   console.log("Editing Movie: ", movieId, " to be ", movie);
//
//   data.forEach((e, i) => {
//     if(e.id == movieId){
//       data[i] = movie;
//     }
//   });
//   res.json(data);
//
// });
//
//
// app.delete("/movies/:id", (req, res) => {
//   const movieId = req.params.id;
//
//   console.log("Editing Movie: ", movieId, " to be dead");
//
//   data.forEach((e, i) => {
//     if(e.id == movieId){
//       data.splice(movieId, 1);
//     }
//   });
//   res.json(data);
//
// });

/**
 * @Date:   2020-01-13T09:46:53+00:00
 * @Last modified time: 2020-01-21T13:45:06+00:00
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 9001;
const body_parser = require("body-parser");
// const moviesRouter = require("./routes/movies");

const uri = process.env.atlas_URI;
let Movie = require('./models/Movie');
let Genre = require('./models/Genre');
let Game = require('./models/Game');

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
let con = mongoose.connection;
// console.log(con);

//Node Server Listens to requests to this port
app.listen(port, () => {
  console.log(`Server Listening on: ${port}`);
});

// const connection = mongoose.connection;

app.get("/", (req, res) => {

  res.json({message: "U Guderwgdtyjdgrtyjwe Fam"});
});
app.get("/genres", (req, res) => {
  // Genre.find().then(genres => res.json(genres)).catch(err => res.status(400).json({message: "Error: " + err}));
  let temp = {name: "rgorg_" + Math.floor(Math.random() * 10), description: ""};
  let obj = new Genre(temp);
  obj.save();
  res.json({name: obj.name});
  // Genre.save({name: "rehth", description: ""});
});

app.get("/games", (req, res) => {
  Game.find().then((games) => {
    res.json(games);
  }).catch((err) => {
    console.log(err);
  });
});

/**
 * @Date:   2020-01-13T09:46:53+00:00
 * @Last modified time: 2020-01-13T11:54:55+00:00
 */

const express = require("express");
const app = express();
const port = 4000;
const body_parser = require("body-parser");

app.use(body_parser.json());

// app.get("/hello", (req, res) => {
//   res.json({message: "Hello World!"});
// });
//
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server Listening on: ${port}`);
});

let data = require(__dirname + '/movies.json');

app.get("/movies", (req, res) => {
  res.json(data);
});

app.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = data.find((_movie) => _movie.id == movieId);

  if(movie){
    res.json(movie);
  }else{
    res.json({message: `Movie ${movieId} does not Exist!`});
  }
});


app.post("/movies", (req, res) => {
  const movie = req.body;
  console.log("Adding New Movie: " , movie);
  data.push(movie);

  res.json(data);
});


app.put("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = req.body;

  console.log("Editing Movie: ", movieId, " to be ", movie);

  data.forEach((e, i) => {
    if(e.id == movieId){
      data[i] = movie;
    }
  });
  res.json(data);

});


app.delete("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  console.log("Editing Movie: ", movieId, " to be dead");

  data.forEach((e, i) => {
    if(e.id == movieId){
      data.splice(movieId, 1);
    }
  });
  res.json(data);

});

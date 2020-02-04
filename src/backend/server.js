/**
 * @Date:   2020-01-13T09:46:53+00:00
 * @Last modified time: 2020-02-04T15:42:52+00:00
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 9001;
const body_parser = require("body-parser");

//define router objects from other files
const RegisterRouter = require('./routes/auth/register');
const LoginRouter = require('./routes/auth/login');

//get database connection URI
const uri = process.env.atlas_URI;

let Genre = require('./models/Genre');
let Game = require('./models/Game');

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const con = mongoose.connection;
// console.log(con);

//use npm package to directly get the body request and ignore cors
app.use(body_parser.json());
app.use(cors());



//Node Server Listens to requests to this port
app.listen(port, () => {
  console.log(`Server Listening on: ${port}`);
});


app.get("/", (req, res) => {
  res.json({message: "U Guderwgdtyjdgrtyjwe Fam"});
});

//use routes from other files
app.use(RegisterRouter);
app.use(LoginRouter);

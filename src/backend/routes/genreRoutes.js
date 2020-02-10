/**
 * @Date:   2020-02-10T19:56:41+00:00
 * @Last modified time: 2020-02-10T20:01:35+00:00
 */

 const express = require("express");
 const mongoose = require("mongoose");
 const app = express();
 const cors = require("cors");
 require("dotenv").config();
 const port = process.env.PORT || 9001;
 const body_parser = require("body-parser");
 const router = require('express').Router();

 const Genre = require("./../models/Genre");
 // const Library = require("./../models/Library");

 router.get("/genres", (req, res) => {
   // res.json({owo: "LMAO"});
   Genre.find({}, (err, genres) => {
     res.json({data: genres});
   });

 });

 module.exports = router;

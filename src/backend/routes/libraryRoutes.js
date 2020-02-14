/**
 * @Date:   2020-02-11T09:59:48+00:00
 * @Last modified time: 2020-02-14T13:36:46+00:00
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 9001;
const body_parser = require("body-parser");
const router = require('express').Router();

const Library = require("./../models/Library");
// const Library = require("./../models/Library");

router.get("/library/:id", (req, res) => {
 // res.json({owo: "LMAO"});
 Library.findOne({_id: req.params.id}, (err, library) => {
   // console.log(library);
   res.json({data: library});
 }).populate("games");

});


router.post("/library/:id", (req, res) => {
  // res.json({data: {message: "Coolio", library_id: req.params.id, body: req.body}});
  Library.findOne({_id: req.params.id}, async (err, library) => {
    library.games.push(req.body.gameId);
    await Library.findByIdAndUpdate(library._id, library, {new: true}, (err, library) => {
      res.json({data: library});
    })
  });
});


router.delete("/library/:id", (req, res) => {
  // res.json({data: {message: "Coolio", library_id: req.params.id, body: req.body}});
  Library.findOne({_id: req.params.id}, async (err, library) => {

    library.games = library.games.filter(g => g != req.body.gameId);
    await Library.findByIdAndUpdate({_id: req.params.id}, library, {new: true}, (err, library) => {
      res.json({data: library});
    });
  });
});

module.exports = router;










//

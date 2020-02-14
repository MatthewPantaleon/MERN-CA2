/**
 * @Date:   2020-02-10T17:09:04+00:00
 * @Last modified time: 2020-02-14T14:22:25+00:00
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 9001;
const body_parser = require("body-parser");
const router = require('express').Router();

const Game = require("./../models/Game");
// const Library = require("./../models/Library");

router.get("/games", (req, res) => {
  // res.json({owo: "LMAO"});
  Game.find({}, (err, games) => {
    res.json({data: games});
  });

});


router.post("/games", async (req, res) => {

  // await Game.save(req.body.newGame. (err, ng) => {
  //
  // });

  return res.json({data: "NEW GAME"});
});

module.exports = router;

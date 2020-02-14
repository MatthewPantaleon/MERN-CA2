/**
 * @Date:   2020-02-10T17:09:04+00:00
 * @Last modified time: 2020-02-14T15:59:46+00:00
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
const Company = require("./../models/Company");
// const Library = require("./../models/Library");

router.get("/games", (req, res) => {
  // res.json({owo: "LMAO"});
  Game.find({}, (err, games) => {
    res.json({data: games});
  });

});


router.post("/games", async (req, res) => {

  console.log(req.body);
  if(!req.body.companyId){
    return res.json({data: "Bad Company Id"});
  }

  let newGame = new Game();
  newGame.name = req.body.newGame.name;
  newGame.description = req.body.newGame.description;
  newGame.price = req.body.newGame.price;
  newGame.genres = req.body.newGame.genres;

  await newGame.save(req.body.newGame, async (err, ng) => {

    if(err){
      err.errors.success = false;
      res.json({data: err.errors})
    };

    await Company.findOne({_id: req.body.companyId}, async (err, company) => {
      company.games.push(ng._id);
      await company.save(company, (err, company) => {
        return res.json({data: {success: true, newGame: ng, companyGames: company.games}});
      });
    });

  });



});

module.exports = router;

/**
 * @Date:   2020-02-10T17:09:04+00:00
 * @Last modified time: 2020-02-14T18:35:02+00:00
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
const Library = require("./../models/Library");

//get all games
router.get("/games", (req, res) => {
  // res.json({owo: "LMAO"});
  Game.find({}, (err, games) => {
    res.json({data: games});
  });

});

//add a game
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

//deleting a game
router.delete("/games/:id", async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body.libraryId);
  let id = req.params.id;
  let libId = req.body.libraryId;

  await Library.find({games: id}, async (err, libraries) => {

    await libraries.forEach(async (lib, i) => {
      libraries[i].games = lib.games.filter(e => e != id);
      await lib.save();
    });
    let userLibrary = {};
    await Library.findOne(libId._id, (err, lib) => {
      userLibrary = lib;
    }).populate("games");

    await Game.deleteOne({_id: id}, async (err, game) => {
      await Game.find({} , (err, games) => {
        res.json({data: {games, userLibrary}});
      });
    });

  });

  // res.json({data: "eeeyy"});
});


//editing a game
router.put("/games/:id", async (req, res) => {

  await Game.findOne({_id: req.params.id}, async (err, g) => {

    g.name = req.body.newGame.name;
    g.description = req.body.newGame.description;
    g.price = req.body.newGame.price;
    g.genres = req.body.newGame.genres;

    await g.save((err, editGame) => {
      res.json({data: editGame});
    });

  });

});


module.exports = router;

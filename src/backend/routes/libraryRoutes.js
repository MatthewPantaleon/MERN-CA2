/**
 * @Date:   2020-02-11T09:59:48+00:00
 * @Last modified time: 2020-02-11T15:40:26+00:00
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
 Library.find({user_id: req.params.id}, (err, library) => {
   res.json({data: library});
 });

});

module.exports = router;

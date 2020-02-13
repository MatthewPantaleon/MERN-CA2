/**
 * @Date:   2020-02-11T09:33:00+00:00
 * @Last modified time: 2020-02-13T13:11:36+00:00
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 9001;
const body_parser = require("body-parser");
const router = require('express').Router();

const Company = require("./../models/Company");
// const Library = require("./../models/Library");

router.get("/company/:id", (req, res) => {
  if(req.params.id !== "null"){
    Company.findOne({company_id: req.params.id}, (err, company) => {
      res.json({data: company, name: company.name});
    });
  }else{
    res.json({data: [], name: ""});
  }

});

module.exports = router;

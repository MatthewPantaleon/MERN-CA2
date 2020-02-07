/**
 * @Date:   2020-01-21T14:12:25+00:00
 * @Last modified time: 2020-02-07T17:55:33+00:00
 */

 const mongoose = require("mongoose");
 const CompanySchema = new mongoose.Schema({
   company_id:{
     type: String,
     required: true,
     unique: true
   },
   name: {
     type: String,
     required: true
   },
   games: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Game",
   }],
   users: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
   }]
 });

 const Company = mongoose.model('Company', CompanySchema, "companies_c");
 module.exports = Company;

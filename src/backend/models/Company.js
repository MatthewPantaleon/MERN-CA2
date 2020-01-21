/**
 * @Date:   2020-01-21T14:12:25+00:00
 * @Last modified time: 2020-01-21T14:17:10+00:00
 */

 const mongoose = require("mongoose");
 const CompanySchema = new mongoose.Schema({
   name: {
     type: String,
     required: true
   },
   description: String,
   games: {
     type: Array
   }
 });

 const Company = mongoose.model('Company', CompanySchema, "copmanies_c");
 module.exports = Copmany;

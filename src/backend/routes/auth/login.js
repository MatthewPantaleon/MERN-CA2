/**
 * @Date:   2020-02-04T14:46:56+00:00
 * @Last modified time: 2020-02-11T18:15:04+00:00
 */

const passport = require('passport');
const settings = require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const body_parser = require("body-parser");

let User = require('../../models/User');
let Library = require('../../models/Library');

router.post('/login', (req, res) => {

  const { body } = req;
  const { password } = body;
  let { email } = body;

  //basic validation for email and password
  if(!email){
    return res.status(400).json({
      success: false,
      message: 'Error: Email cannot not blank.'
    });
  }
  if(!password){
    return res.status(400).json({
      success: false,
      message: 'Pass: Password cannot not blank.'
    });
  }
  email = email.toLowerCase().trim();

  User.findOne({email: email}, async (err, user) => {
    if(err)throw err;

    let libraryId;
    await Library.findOne({user_id: user._id}, (err, library) => {
      if(library){
        libraryId = library._id;
      }else{
        libraryId = "NO Library";

      }
    })

    //user validation
    if(!user){
      res.status(401).json({success: false, message: 'Authentication failed. User not found.'});//check is user exists
    }else{
      //match passwords
      if(user.validPassword(password)){
        //create token
        let token = jwt.sign(user.toJSON(), process.env.API_SECRET);
        console.log(user.company_id);
        if(user.company_id == undefined || user.company_id == ""){
          user.company_id = "null";
        }
        res.json({success: true, token: 'JWT ' + token, username: user.username, company_id: user.company_id, library_id: user.library_id});
      }else{
        res.status(401).json({success: false, message: "Authentication failed. Wrong Password."});
      }
    }
  });


});




module.exports = router;

/**
 * @Date:   2020-01-28T10:19:32+00:00
 * @Last modified time: 2020-02-04T15:37:55+00:00
 */

const passport = require('passport');
const settings = require('../../config/passport')(passport);
const jet = require('jsonwebtoken');
const router = require('express').Router();
const body_parser = require("body-parser");

let User = require('../../models/user');
//register route
router.post('/register', (req, res) => {

  //seperates the body data
  let { body } = req;
  let { password } = body;
  let { email } = body;
  let {username} = body;
  // console.log(body);

  //basic string validation of inputs
  if(!username){
    return res.status(400).json({
      success: false,
      message: 'Error: UserName cannot be blank.'
    });
  }
  if(!email){
    return res.status(400).json({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if(!password){
    return res.status(400).json({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  User.find({
    email: email
  }, (err, previousUsers) => {//error callback and array of existing users with this email
    if(err){
      return res.json({success: false, message: 'Error: Server Error FIND'});
    }else if(previousUsers.length > 0){//checks if a user alreacy has this email
      return res.json({
        success: false,
        message: 'Error: Account already exists'
      });
    }

    //create new user after validation
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = newUser.generateHash(password);

    newUser.save((err, user) => {
      if(err){
        return res.json({
          success: false,
          message: 'Error: Server Error SAVE'
        });
      }

      return res.json({
        success: true,
        message:'Account created for user'
      });
    });

  });
});

module.exports = router;

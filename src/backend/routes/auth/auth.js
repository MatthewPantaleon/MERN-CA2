/**
 * @Date:   2020-02-04T16:00:38+00:00
 * @Last modified time: 2020-02-11T15:39:08+00:00
 */

const passport = require('passport');
const settings = require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const body_parser = require("body-parser");

//extract the token from the rest of the header
const getToken = (headers) => {
  if(headers && headers.authorization){
    let parted = headers.authorization.split(' ');
    if(parted.length === 2){
      return parted[1];
    }else{
      return null;
    }
  }else{
    return null;
  }
};

//main authenticator router to validate React components
router.route("/check").post(passport.authenticate('jwt', {session: false}), (req, res) => {
  const token = getToken(req.headers);
  // console.log("rht: ",token);
  if(token){
    res.status(200).json(true);
  }else{
    res.status(401).json(false);
  }

});

module.exports = router;

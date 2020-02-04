/**
 * @Date:   2020-01-28T09:50:39+00:00
 * @Last modified time: 2020-02-04T10:13:00+00:00
 */

const JwtStrategy = require('passport-jwt').Strategy;//Gives options
const ExtractJwt = require('passport-jwt').ExtractJwt;

let user = require('../models/user');
const secret = process.env.API_SECRET;

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");//get header data from a request
  opts.secretOrKey = secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done){//user object passed and callback
    user.findOne({id: jwt_payload.id}, function(err, user){
      if(err)return done(err, false);

      if(user){
        done(null, user);
      }else{
        done(null, false);
      }
    });
  }));
};

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const config = require('./config');
const passport = require('passport')
console.log(config.web.client_secret)

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = passport.use(new GoogleStrategy({
    clientID: config.web.client_id,
    clientSecret: config.web.client_secret,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  (token, tokenSecret, profile, done) => {
      console.log(profile)
      User.findOne({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));

// module.exports = passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//         User.findById(jwt_payload._id)
//         .then(user => {
//           if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//         }
//         })
//         .catch(err => console.log(err));
//     })
//   );
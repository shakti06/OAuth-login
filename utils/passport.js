const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const key = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: key.google.clientID,
      clientSecret: key.google.clientSecret,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const key = require("../config/keys");
const User = require("../models/users");
const logger = require("./logger");

/*serialization and deserialization
 * @Param('id')
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: key.google.clientID,
      clientSecret: key.google.clientSecret,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          logger.info("already existed user");
          done(null, currentUser);
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(userName => {
              logger.info("user created", userName);
              done(null, userName);
            });
        }
      });
    }
  )
);

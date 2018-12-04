const passport = require("passport");

function services() {
  return {
    authenticate: passport.authenticate("google", {
      scope: ["profile"]
    })
  };
}

module.exports = services();

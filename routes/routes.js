const express = require("express");
const router = express.Router();
const passport = require("passport");

const controller = require("../controller/controller");

router.get("/", (req, res) => {
  controller.index(req, res);
});

router.get("/login", (req, res) => {
  controller.login(req, res);
});

router.get("/logout", (req, res) => {
  controller.logout(req, res);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  controller.redirect(req, res);
});

module.exports = router;

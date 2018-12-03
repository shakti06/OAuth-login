const express = require("express");
const router = express.Router();

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

router.get("/google", (req, res) => {
  controller.google(req, res);
});

module.exports = router;

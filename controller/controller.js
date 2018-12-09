//const services = require("../services/services");

function Controller() {
  return {
    index: (req, res) => {
      res.render("home");
    },

    login: (req, res) => {
      res.render("login");
    },

    logout: (req, res) => {
      res.send("logging out");
    },
    //google: services.authenticate()
    redirect: (req, res) => {
      res.send(req.user);
    }
  };
}

module.exports = Controller();

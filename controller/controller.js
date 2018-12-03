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
    google: (req, res) => {
      res.send("goggle");
    }
  };
}

module.exports = Controller();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const route = require("./routes/routes");
const passportf = require("./utils/passport");
const key = require("./config/keys");
const logger = require("./utils/logger");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    secret: [key.session.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  key.mongodb.uriDB,
  () => {
    console.log("mongodb connected");
  }
);

app.set("view engine", "ejs");

app.use("/auth", route);

const port = process.env.PORT || 3000;
app.set("port", port);

app.listen(app.get("port"), logger.info("success on 3000"));

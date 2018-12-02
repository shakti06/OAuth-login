const express = require("express");
const app = express();
const route = require("./routes/routes");

app.set("view engine", "ejs");

app.use("/", route);
const port = process.env.PORT || 3000;
app.set("port", port);

app.listen(app.get("port"), () => {
  console.log("listening on the port 3000");
});

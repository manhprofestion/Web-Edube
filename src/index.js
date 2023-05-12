const express = require("express");
const path = require("path")
const hbs = require("express-handlebars");
const app = express();
const port = 3000;
const db = require("./config/db/index");
const route = require("./resources/routes");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.json());


//static
// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

//Template Engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    defaultLayout: "main", // the main layout file
    layoutsDir: __dirname + "/resources/views/layouts", // the directory where layout files are located
  })
);

app.set("view engine", "hbs");
app.set("view options", { layout: "other-layout" });
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

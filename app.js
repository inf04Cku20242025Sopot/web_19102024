const express = require("express");
const bodyParser = require("body-parser");
const { home } = require("./controllers/select_db");
const appController = require("./controllers/appControler");
const app = express();
const addUser = require("./controllers/addUser.js");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/select", home);

app.get("/", appController.index);

app.get("/display", home);

app.post("/form", addUser.add);

module.exports = app;

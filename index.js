const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
	res.render("landing")
});
app.get("/home", (req, res) => {
	res.render("home")
});

app.get("/about", (req, res) => {
	res.render("about")
});

app.get("/experience", (req, res) => {
	res.render("experience")
});

app.get("/projects", (req, res) => {
	res.render("projects")
});

app.get("/contacts", (req, res) => {
	res.render("contacts")
});

app.listen(3000, () => {
	console.log("CV Server has started!");
});

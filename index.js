const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");


const app = express();

app.engine("ejs", ejsMate);  
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("listings/main");
});

app.listen(5173, () => {
    console.log("Server running on http://localhost:5173");
});
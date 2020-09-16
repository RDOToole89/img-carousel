const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

// app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/script.js");
// });

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("Server started on port 3000");
});

var express = require('express');
const path = require('path');
var app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get("/home", function (req, res) {
    res.send("<h1>Home</h1>");
});

app.listen(3000, function () {
    console.log("Server online sulla porta 3000");
});
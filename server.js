var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var serveStatic = require('serve-static')


var app = express();
var PORT = process.env.PORT || 3050;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use(express.static('public'))


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
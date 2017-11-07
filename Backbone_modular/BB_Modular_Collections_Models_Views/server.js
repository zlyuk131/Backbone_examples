var express = require("express");
var path = require("path");
var app = express();

app.use('/', express.static(path.join(__dirname, "src")));
//add node_modulest to server relative paths
app.use('/node_modules', express.static(path.join(__dirname, "node_modules")));

app.listen(4002, function(){
 console.log("Listening on port 4002");
 console.log(path.join(__dirname, "public"));
});
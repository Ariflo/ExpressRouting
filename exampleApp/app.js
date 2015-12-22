var express = require("express");
var app = express(); 
var routes = require('./router/routes')();


app.set("view engine", "ejs");
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(3000, function(){
	console.log("Listening on 3000");
});

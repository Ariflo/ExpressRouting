var express = require("express");
var app = express(); 


app.set("view engine", "ejs");
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.render("pages/index");
});

app.get('/nightmare', function(req,res){
	res.render("pages/expressHelp");
});

app.get('/semantic', function(req,res){
	res.redirect("/nightmare");
});

app.listen(3000, function(){
	console.log("Listening on 3000");
});

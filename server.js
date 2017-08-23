// server.js - where your node app starts

// init project
var express = require('express');
var app = express();
var timeCalc = require('./timeCalc.js');

//set static
app.use(express.static('public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//route for homepage
app.get('/', function(request, response) {
  response.render('index');
});

//route for microservice
app.get('/:time',function(req,res){
    var output = timeCalc(req.params.time);
    res.send(JSON.stringify(output));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

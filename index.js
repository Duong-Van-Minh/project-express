require('dotenv').config();
//require
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URl, {useNewUrlParser: true});



//
var app = express();
var port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');



//do not know
app.listen(port, function (){
	console.log('Server listening on port' + port);
})
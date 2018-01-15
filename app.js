var express = require('express');
var routes = require('./routes/route');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();

// mongoose.connect('mongodb://kofa:kofa1234@ds241395.mlab.com:41395/books',{useMongoClient: true});
mongoose.connect('mongodb://localhost:27017/bookAPI',{useMongoClient: true});

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

app.listen(4000, function () {
	console.log('app running on port 4000')
})
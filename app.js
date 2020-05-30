// Setup and calling all required apps from package.json
var express = require('express'); //calling express from package.json
var app = express(); //setting up expres as a local var

var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); //setting up bodyParser JSON functionality for express to use

var cors = require('cors');
app.use(cors()); //setting up cors functionality for express to use

//GET call to return JSON that formats our date and teme into a UNIX/Natural date

app.get('/:time', function (req, res, next) {
	var dateVals = req.params.time; //accepting passed in date from URL 

	// Options for formating data in natural date view
	var dateFormat = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	// logic to see if we are passing in unix date or natural date
	if (isNAN(dateVals)) { //NAN - Not A Number True - return natural date
		var naturalDate = new Date(dateVals);
		naturalDate = naturalDate.toLocalDateString("en-us", dateFormat);
		var unixDate = new Date(dateVals).getTime()/1000;// converting date string value in to numbers and deviding by 1000 equals unix date

	} else {
		var unixDate = dateVals;
		var naturalDate = new Date(dateVals * 1000);
		naturalDate = naturalDate.toLocalDateString("en-us", dateFormat);
	}:

	res.json();
})



app.listen(3000, function(){
	console.log("working");
});
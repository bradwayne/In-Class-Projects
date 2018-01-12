// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// // Include the geocoder NPM package (Remember to run "npm install geocoder"!)
// var geocoder = require('geocoder');


// // Take in command line argument
// var city = process.argv[2];
// var state = process.argv[3];

// // Build your address as an array or string
// var address = city + state;

// // Then use Geocoder NPM package to geocode the address
// geocoder.geocode(address, function(err, data) {

// 	if (err) {
// 		return console.log(err);
// 	}

//     console.log(JSON.stringify(data, null, 2));
// });

// // Then use Geocoder NPM to geocode the address


var geocoder = require('geocoder');

var nodeArgs = process.argv;

var address = "";

for (var i = 2; i < nodeArgs.length; i++) {

	address = address + " " + nodeArgs[i];
}

console.log("Search for" + address);

geocoder.geocode(address, function(err, data) {

     console.log(JSON.stringify(data, null, 2));

});
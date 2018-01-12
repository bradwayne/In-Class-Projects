// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");
var fs = require("fs");

var userSearch = function (name, place) {
    this.place = place;
    this.name = name;

    weather.find({ search: place, degreeType: "F" }, function (err, result) {
        // If there is an error log it.
        if (err) {
            console.log(err);
        }
        // If there is no error... then print out the weather data.
        // We use JSON.stringify to print the data in string format.
        // We use the JSON.stringify argument of "2" to make the format pretty.
        // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
        //console.log(JSON.stringify(result, null, 2));
        var date = new Date();
        var currentDate = "Date : " + date;
        var name = "Name : " + this.name;
        var weather = "temperature (F) : " + result[0].current.temperature;
        var location = "Location : " + this.place;

        var combine = name + ", " + currentDate + ", " + weather + ", " + location;
        //console.log(combine);


        fs.appendFile("log.txt", combine + "\n", function (err) {
            if (err) {
                console.log(err);
            } else {

                return console.log(combine);
            }
        })


    });
}


module.exports = userSearch;
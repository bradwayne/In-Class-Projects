var fs = require('fs');
var weather = require("weather-js");
var userSearch = require('./weatherAdmin')
var getData = process.argv[2];
var name = process.argv[3];
var place = "";


for (var i = 4; i < process.argv.length; i++) {
    if (i > 4 && i < process.argv.length) {
        place = place + " " + process.argv[i];
    } else {
        place += process.argv[i];
    }
}

function WeatherAdmin(getData, newUserSearch) {

    fs.readFile('log.txt', 'utf8', function (err, data) {


        if (err) {
            console.log('You have an Error!');
        }
        console.log(data);
    });

}

if (getData) {
    if (getData.toLowerCase().trim() === 'admin') {
        WeatherAdmin(getData)
    } else if (getData.toLowerCase().trim() === 'user') {
        userSearch(name, place);
    }
};
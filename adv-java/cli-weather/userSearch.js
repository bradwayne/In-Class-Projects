

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
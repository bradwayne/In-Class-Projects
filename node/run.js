

// A punk band is Green Day
// //   A rap band is Run DMC
// //   A classic band is Led Zeppelin


var bands = require("./bands.js");






// console.log(bands);


for (var key in bands) {
	console.log('A ' + key + ' band is ' + bands[key] + '.');
}
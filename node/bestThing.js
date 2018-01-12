
var fs = require('fs');


fs.readFile('best_things_ever.txt', 'utf8', function(err, data) {

	if (err) {
		return console.log(err);
	}

	var output = data.split(",");

	for (var i = 0; i < output.length; i++) {


	console.log(output[i]);
}

});

// var lazyBoyRecliner = ['message', 'meditation', 'hot shower', 'cheese fondue', 
// 'hot coffee with cashew milk', 'kitten falling asleep on my lap'];




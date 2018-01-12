
console.log(process.argv);

var argument1 = process.argv[2];
var argument2 = process.argv[3];

if (argument1 == argument2) {
	console.log('true');
} else {
	console.log('false');
}

// or -- be carefull not to over simplify



console.log(process.argv[2] === process.argv[3]);
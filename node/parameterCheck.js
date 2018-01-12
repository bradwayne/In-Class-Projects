
//onsole.log(parseFloat(process.argv[2]) === parseFloat(process.argv[3]));
// console.log(process.argv);

var argument1 = process.argv[2];
var argument2 = process.argv[3];

if (argument1 == argument2) {
	console.log('true');
} else {
	console.log('false');
}
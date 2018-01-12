
var inputString = process.argv;
console.log(inputString);

var operand = inputString[2]

var num1 = inputString[3];

var num2 = inputString[4];

var outputNum;


if (operand == 'add') {
	operand = parseFloat(num1) + parseFloat(num2);
}


else if (operand == 'subtract') {
	operand = parseFloat(num1) - parseFloat(num2);
}

else if (operand == 'multiply') {
	operand = parseFloat(num1) * parseFloat(num2);
}

else if (operand == 'divide') {
	operand = parseFloat(num1) / parseFloat(num2);
}

else {
	output = 'not defined';
}

console.log(outputNum);
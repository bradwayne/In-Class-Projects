
var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function logBefore(func, message) {
    console.log(message);
    func();
}
// Write a function that runs a function argument if
// its other argument is truthy.
function runIf(func, bool) {
    if (bool) {
        func();
    }
}
// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function wrap(func, value) {
    return function () {
        return func(value);
    };
}
// Callbacks appear in familiar places, like fs.writeFile.
fs.writeFile("log.txt", "Log message!", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("File saved!");
});
// Alternatively, we can assign our function to a variable,
// and pass it by name.
var writeFileCallback = function (err) {
    if (err) {
        console.log(err);
    }
    console.log("File saved!");
};
// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile("log.txt", "Log message!", writeFileCallback);
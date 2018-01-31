// Dependencies
var express = require("express");
// Create express app instance.
// Routes
var app = express();
var PORT = process.env.PORT || 3000;


// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:a/:b", function (req, res) {
    // TODO parse out the variables from the request
    var operation = req.params.operation;

    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);

    // Parameters are received from the URL
    // TODO make sure they're converted to integers (and not strings)
    // Parameters are converted to integers
    // Initialize the result variable to send later
    var result;
    // Switch statement chooses operation based on the operation parameter.
    switch (operation) {
        // BONUS - How could you use * + etc. inside the app.get()?
        case "add":
            result = a + b;
            // Add your logic here. Pun intended.
            break;
        case "subtract":
            result = a - b;
            // Subtract logic
            break;
        case "multiply":
            result = a * b;
            // Multiply
            break;
        case "divide":
            result = a / b;
            // Divide
            break;
        default:
            // Handle anything that isn't specified
            result =
                "Sorry! The only valid operations are add, subtract, multiply, and divide.";
    }
    // We return the result back to the user in the form of a string
    res.send(result.toString());
});
// Initiate the listener.
// app.listen(3002);

app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});
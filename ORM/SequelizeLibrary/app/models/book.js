// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)
var Sequelize = require("../config/connection/.js");

var sequelize = require("../config/connection/.js");

// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER
// 5. Set timestamps to false on this model

// Sync model with DB

// Export the book model for other files to use

var Book = sequelize.define("book", {

    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    page_number: Sequelize.INTEGER

}, {
    timestamps: false
});

Book.sync();



module.exports = Book;
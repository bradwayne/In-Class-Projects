var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bailey#1019",
  database: "auctionHouseDB"
});



function createProduct(item, price, category) {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO itemList SET ?",
    {
      item: item,
      price: price,
      category: category,
    },
    function(err, res) {
      console.log(res.affectedRows + " item inserted!\n");
      // Call updateProduct AFTER the INSERT completes
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function addCLI(){
	inquirer.prompt([
	{
		type: "input",
		name: "itemResponse",
		message: "What is the item you wish to add?"
	},

	{
		type: 'input',
		name: "priceResponse",
		message: "How much is your minimum bid?"
	},

	{
		type: 'input',
		name: 'categoryResponse',
		message: 'What kind of item is it?'
	}
	]).then(function(add){
		var item = add.itemResponse;
		var price = add.priceResponse;
		var category = add.categoryResponse;
		createProduct(item, price, category);
		readProducts();
		connection.end();
	})
}


var bidPrice;
function updateProduct() {
  console.log("Updating fetching items...\n");
  var query = connection.query(
    "UPDATE itemList SET ? WHERE ?",
    [
      {
        price: bidPrice,
      },
      {
        item: searchedItem,
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// function deleteProduct(flavor) {
//   console.log("Deleting all "+flavor+"...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: flavor,
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//     }
//   );
// }
function askPrice(){
  inquirer.prompt([
  {
    type: "input",
    name: "priceResponse",
    message: "How much are you willing to bid?"
  }
  ]).then(function(price){
    bidPrice= price.priceResponse;
    console.log(bidPrice);
    updateProduct();
    readProducts();
});
};
var searchedItem;
function bid() {
  inquirer.prompt([
  {
    type: "input",
    name: "itemResponse",
    message: "What is the item you wish to search"
  }
  ]).then(function(search){
    var query = connection.query("SELECT * FROM itemList Where ?", {
      item: search.itemResponse,
     },
     function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    searchedItem = res[0].item;
    console.log(searchedItem);

    askPrice()
    })
  });
}

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM itemList", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
      for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | Item: " + res[i].item + " | Price : $" + res[i].price + " | Category: " + res[i].category);
    }
  });
}
connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId + "\n");
  inquirer.prompt([

  {
    type: "list",
    name: "userInput",
    message: "Would you like to add or bid on an item?",
    choices: ["add", "bid"]
  }
]).then(function(prompt) {
	switch (prompt.userInput) {
		case "add":
    addCLI();
		break;
		case "bid":
		bid()
    break;
		}
	});
});
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Bailey#1019",
  database: "playlistDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  createSongs();
});

function createSongs() {
  console.log("Inserting a new songs...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",

    {
      title: "Flight of Icarus",
      artist: "Iron Maiden",
      genre: "Heavy Metal"
    },

    function (err, res) {
      console.log(res.affectedRows + " songs inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSongs();
    }
  );
  // logs the actual query being run
  console.log(query.sql);
}

function updateSongs() {
  console.log("Updating all Heavy Metal songs...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",

    [{
        title: "Number of the Beast"
      },
      {
        artist: "Iron Maiden"
      }
    ],


    function (err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteSongs();
    });
  // logs the actual query being run
  console.log(query.sql);
}

function deleteSongs() {
  console.log("Deleting all dance songs...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",

    {
      genre: "Dance"
    },


    function (err, res) {
      console.log(res.affectedRows + " song deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readSongs();
    });
  }


function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM top5000", function (err, res) {
    if (err) throw err;
    
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
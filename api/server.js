var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "retail"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM admin", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});



app.get('/', function (req, res) {
   

    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
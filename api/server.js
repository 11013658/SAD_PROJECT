var express = require('express');
var cors = require('cors');

require ('dotenv').config();

var app = express();
var port = process.env.PORT || 5000;


app.use(cors);
app.use(express.json());

app.listen(port,()=>{
  console.log("Server is running on port "+port)
})
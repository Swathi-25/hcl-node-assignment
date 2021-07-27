var express = require('express');  
var app = express(); 
var router=express.Router();
var route=require('./routers');
app.set("json spaces", 2)

app.use(express.json());
app.use('/approutes',route);

var server = app.listen(3000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('app listening at http://%s:%s', host, port);  
});  
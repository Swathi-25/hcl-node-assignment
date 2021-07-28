let express = require('express');  
let app = express(); 
let router=express.Router();
let route=require('./routers');
app.set("json spaces", 2)

app.use(express.json());
app.use('/approutes',route);

let server = app.listen(3000, function () {  
  let host = server.address().address;  
  let port = server.address().port;  
  console.log('app listening at http://%s:%s', host, port);  
});  

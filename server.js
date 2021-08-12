let express = require('express');  
let app = express(); 
let router=express.Router();
let route=require('./routers');
app.set("json spaces", 2)

app.use(express.json());
app.use('/approutes',route);

app.listen(3000); 
 
  

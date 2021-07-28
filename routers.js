let express = require('express');  
let app=express();
let router=express.Router();
const bodyParser = require('body-parser');
const fs=require('fs');
const axios = require("axios");
let path = require('path');

//to use route /file that outputs a file content from any local directory

router.get('/', function(req, res){
  let options = {
      root: path.join(__dirname)
  };
    
  let fileName = 'data.txt';
  res.sendFile(fileName, options, function (err) {
      if (err) {
          next(err);
      } else {
          console.log('Sent:', fileName);
      }
  });
});
 

//to use route /product for finding a product of given url parameters - num & num2
router.get("/product", function (req, res) {
    let num = req.query.num;
    let num2= req.query.num2;
    if(num&&num2){
    var result= (num*num2);
    }
    else res.json(
      {"error":"provide two values"}
      );
  res.json(
    {"the product of two params ": result}
    );
})


// to use route /nonrepeatingchars API for finding the first nonrepeating character in a String

function nonRepeatingchar(str){
    let result;
    for (let i = 0; i < str.length; i++) {
        if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
           result= str.charAt(i);
        }
        
    }
    return result;
}
router.get("/nonrepeatingchars",function(req,res){
    let s=req.query.s;
     if(s)
    let str1=nonRepeatingchar(s);
    res.json({
        "FirstNonReapChar":str1
    })
     res.json({
         "Error":"Give the String to continue"
     })
    
})


// to use route /requestbody Api that will accept a body which need to be written in a file

router.post("/requestbody", function (req, res) {
    let data=req.body;
    fs.writeFile('data.txt',data.data,function(err){
      if(err){
        res.json({
          "Error": "File cant be written"
      });
      }
      else {
        
        res.json({
          "description": "File wrote successfully",
          "Filen content": data
      });
      }
      
    })

  })

  //to use route /json that call a URL and outputs the respose of api

  router.get('/json',function(req,res){

    axios.get("https://jsonplaceholder.typicode.com/todos").then(function(response) {
    
          res.json(response.data)
        }).catch(function(error) {
          res.json("Error occured!")
        })
    })



module.exports=router

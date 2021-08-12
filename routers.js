let express = require('express');  
let router=express.Router();
let bodyParser = require('body-parser');
let fs=require('fs');
let axios = require("axios");
let path = require('path');
const pro=require('./mockunit');

function product(num,num2){
 
    return num*num2;
    
}

function nonRepeatingchar(str){
  let result;
  for (let i = 0; i < str.length; i++) {
      if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
         result= str.charAt(i);
      }
      
  }
  return result;
}




//to use route /file that outputs a file content from any local directory

router.get('/file', function(req, res){
  fs.readFile('data.txt', function (err, data) {
    if (err) return res.send(err);
    res.send(data.toString());
 });
});
 


//to use route /product for finding a product of given url parameters - num & num2
router.get("/product", function (req, res) {
    let num = req.query.num;
    let num2= req.query.num2;
    if(num&&num2){
    let result= product(num,num2);
    res.json(
      {"the product of two params ": result}
      );
    }
    else {
       res.json(
      {"error":"provide two values"}
      );
    }
    console.log(result);
  
})



// to use route /nonrepeatingchars API for finding the first nonrepeating character in a String


router.get("/nonrepeatingchars",function(req,res){
    let s=req.query.s;
     if(s){
    let str1=nonRepeatingchar(s);
    res.json({
        "FirstNonReapChar":str1
      })
     }
     else {
     res.json({
         "Error":"Give the String to continue"
     })
     }
})



// to use route /requestbody Api that will accept a body which need to be written in a file

router.post("/requestbody", function (req, res) {
    let data=req.body;
    if(req.body){
    fs.writeFile('data.txt',data.name,function(err){
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
    }

  })

  

  //to use route /json that call a URL and outputs the respose of api
  router.get('/json',function(req,res){

    axios.get("https://jsonplaceholder.typicode.com/todos").then(function(response) {
    
          res.json(response.data);
        }).catch(function(err) {
          res.json({"err":"Error occured!"})
        })
    })


module.exports.router=router;
module.exports.nonRepeatingchar=nonRepeatingchar;
module.exports.product=product;

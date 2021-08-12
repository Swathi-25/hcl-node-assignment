const nonRepeatingchar=require('./routers').nonRepeatingchar;
const app=require('./routers').router;
const product=require('./routers').product;
var server = require("supertest");


//testing non repeating character
test('testing non repeating chars ',()=>{
   let str="node application"
    expect(nonRepeatingchar(str)).toBe("t");
 });

 test('testing negative scenario ofnon repeating chars ',()=>{
   expect(nonRepeatingchar("node application")).not.toBe("d");
 });


//testing the product of two numbers
 it('testing product of two numbers',()=>{
    expect(product(2,5)).toEqual(10);
 })

it('testing product of two numbers is not equal',()=>{
  expect(product(2,5)).not.toEqual(5);
  
})

//test api /product
test("testing api /product",function(done){
  let url='/product?num=12&num2=9'
  server(app)
  .get()
  .expect('Content-Type', 'attachment; filename=data.txt')
  .expect("Content-type",/json/)
  .expect(200);
  done();
});



 //testing the output of file in directory
test("testing api /file",function(done){
  server(app)
  .get('/file')
  .expect('Content-Type', 'attachment; filename=data.txt')
  .expect("Content-type",/json/)
  .expect(200);
  done();
});




//testing post call that gets request body
test("call post method",function(done){
 let res= server(app)
  .post('/requestbody')
  .send({
    name:"welcome to jest environment for testing the nodejs applications"
  })
  .expect("Content-type",/json/)
  .expect(200);

  done();
});

//testing the api/json
test("testing api /json",function(done){
  server(app)
  .get('/json')
  .expect("Content-type",/json/)
  .expect(200);
  done();
});


 
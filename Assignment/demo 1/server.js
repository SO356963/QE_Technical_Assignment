/**var request = require('http');

request.get('http://jsonplaceholder.typicode.com/posts/', function(error, response, body){
    if(!error && response.statusCode == 200){
      console.log(body);
    }
});**/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/',function(req,res){
  res.json({"error" : false, "message" : "Hello !"});
});

router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});

app.use('/',router);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})
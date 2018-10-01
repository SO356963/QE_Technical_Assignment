/**
 * Make a GET call. Assert the response status code and userId
Test data - https://jsonplaceholder.typicode.com/posts/1

 */

 //Import required modules
var https = require('https');
 var assert = require('assert');

 //Requst URL is hit
 https.get("https://jsonplaceholder.typicode.com/posts/1",
 res=>{

     if(assert ==res.statusCode,200){
     console.log( "Response code is: " +res.statusCode);
     }
     else
     console.log("Error occured!");

  var body = '';

  //Gets the response
  res.on('data',data=>{
     body+=data;

     //Parses body into json format
    var json = JSON.parse(body);

    //Asserts the userId
     if(assert==json.userId,1){
         console.log( "Successfully asserted the userId: " +json.userId);
         }
         else{
         console.log("not successful!")};
 })

//Prints the response
 res.on('end',()=>console.log(body));
 })

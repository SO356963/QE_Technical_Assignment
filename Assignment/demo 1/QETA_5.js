/**
 * Make a POST call. Assert the response status code and id
Test data - https://jsonplaceholder.typicode.com/posts

body: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
headers:"Content-type": "application/json; charset=UTF-8"

 */

 ////Import required modules
var request = require('request');

//New values to be created as per the CRUD operations
var options = {
  method: 'post',
  body: { "title": "foo" ,
          "body": 'bar', 
          "userId":'1'}, // Javascript object
  json: true, // Use,If you are sending JSON data

  //The service url
  url: 'https://jsonplaceholder.typicode.com/posts',
  
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}
 request(options, function (err, res, body) {
  if (err) {
     console.log('Error :', err)
     return
  }

   //Prints the response
  console.log(' Body :', res.body);
   
console.log('Response status code is : '+ res.statusCode+ ' which means the record is created successfully!');
});
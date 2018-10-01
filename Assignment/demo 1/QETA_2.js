/**
 * 	Read a JSON file, change some values and write the json in to new file.
EG: name : 'Wipro' to name : 'Wipro Ltd'
 */

//Import required modules
var fs = require('fs-extra');

var fileName = './test.json';
var fileName1 = './updatedtest.json'
var file = require(fileName);
//var file1 = require(fileName1);

file.Organisation = "Wipro Ltd";//Json value to be changed

//write the changed value in new file "updatedtest.json"
fs.writeFile(fileName1, JSON.stringify(file), function (err) {
  
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  
  console.log('Data updated in : ' + fileName1);
});

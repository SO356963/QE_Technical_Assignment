/**
 * 	Read a xml file, change some values and write the xml in to new file.
EG: <name>Wipro</name> to <name>Wipro Ltd<name>
 */


 //Import required modules
var fs = require('fs'),
parseString = require('xml2js').parseString,
xml2js = require('xml2js');


//Reading xml data from test.xml file
fs.readFile('test.xml', 'utf-8', function (err, data){
    if(err) 
        console.log(err);// Logs error encountered in reading file
    else
        console.log(data);//Prints the file data

        //Parses xml data into Json object
    parseString(data, function(err, result){
        if(err) 
            console.log(err);
        else
            console.log("Json object has been created!");
        var json = result;

        json.Biodata.Employee[0].Organisation = "Wipro Ltd"; // Value to be changed

        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);// Converts json back to xml

        //Updates the changed value in new updated.xml file
        fs.writeFile('updatedtest.xml', xml, function(err,data){
            if (err)
                console.log(err);
            else
                console.log("Successfully updated the changes in updatedtest.xml file!");
        })
        
    });
});
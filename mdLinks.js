const fs = require("fs");
const path = require("path");


 const mdLinks = { 
     readMe: fs.readFile("file2.txt", "utf-8", function(err, data){console.log(data)}),
     checkDir: fs.readdir("readme_files", "utf-8", function(err, data){console.log(data)})
    };



 module.exports = mdLinks;

   
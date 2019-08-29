const fs = require("fs");
const path = require("path");
const pathName = process.argv[2];
const linkRegEx = /[(](http.+)[)]/igm;
// const directory = ("dirname or process.cwd");

 const mdLinks = { 
     pathExt: pathName => path.extname(pathName) === ".md",  //Síncrona
     mdRead: (pathName, callback) => {
         fs.readFile(pathName, "utf-8", (err, data) => {
             if (error) {
                 throw error;
             }
            callback(data.match(linkRegEx).map(e => e.replace(linkRegEx, "$1")));
         });
        }
    //  checkDir: fs.readdir(directory, "utf-8", (err, data) => console.log(data)),
    mdRead: fs.readFile(pathName, "utf-8", (err, data) => console.log(data.match(linkRegEx).map(e => e.replace(linkRegEx, "$1"))))

    };
    console.log(mdLinks.pathExt(pathName));
    //console.log(mdLinks.mdRead.callback);

 module.exports = mdLinks;

   
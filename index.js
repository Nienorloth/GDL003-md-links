//Global variables:
const fs = require("fs");
const path = require("path");
const pathName = process.argv[2];
const linkRegEx = /[(](http.+)[)]/igm;

//Function to identify markdown file:
const pathExt = (pathName) => {
   if (path.extname(pathName) === ".md") {
       return "Es un archivo markdown";
    //    mdRead();
       
   } else {
      return "No es un archivo markdown";
    //    checkDir();
      
   }
}

//Function to read md file / 
const mdRead = () => {
  
  return  new Promise (function (resolve, reject) {

        fs.readFile(pathName, "utf-8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }  
        });
    });
};

//consume promise to get md file links
  const getLinks = function () {

        mdRead()
        .catch(function (error) {
            console.log(error);
        })
        .then(function (mdRead) {
            const links = (mdRead.match(linkRegEx).map(e => e.replace(linkRegEx, "$1")));
            console.log(links);
            return links
        });
        
    }

//Read directory
    const checkDir = () => {
        console.log('---->',pathName)
        return new Promise (function (resolve, reject) {
            
        fs.readdir(pathName, "utf-8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
                console.log(data);
            }  
        });
    });
};

// Consume promise to get files in a directory
const dirLinks = function () {

    checkDir(pathName)
    .catch(function (error) {
        console.log("No se encontraron archivos en el directorio");
    })
    .then(function (checkDir) {
        const dirFiles = (checkDir.data);
        return dirFiles
    });
}

//Execute functions and show data
console.log(pathExt(pathName));
// console.log(mdRead(pathName));
if (pathExt(pathName) === "Es un archivo markdown") {console.log(getLinks(pathName));
} else {console.log(dirLinks(pathName));
};




//Global variables:
const fs = require("fs");
const path = require("path");
const pathName = process.argv[2];
const linkRegEx = /[(](http.+)[)]/igm;
// const directory = __dirname;

//Function to identify markdown file:

const pathExt = (pathName) => {
   if (path.extname(pathName) === ".md") {
       console.log("El archivo es markdown");
       mdRead();
       return true
   } else {
       console.log("El archivo no es markdown");
       checkDir();
       return false
   }
}
//Function to read md file / promise
const mdRead = (path) => {
  
  return  new Promise ( function (resolve, reject) {

        fs.readFile(pathName, "utf-8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }  
        });
    });
};

  const getLinks = function () {

        mdRead()
        .catch(function (error) {
            console.log("No se encontraron links en el archivo");
        })
        .then(function (mdRead) {
            const links = (mdRead.match(linkRegEx).map(e => e.replace(linkRegEx, "$1")));
            console.log(links);
            return links
        });
        
    }

    const checkDir = (pathName) => {

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
// checkDir(pathName, (data) => {console.log(data)});

const dirLinks = function () {

    checkDir()
    .catch(function (error) {
        console.log("No se encontraron links en el directorio");
    })
    .then(function (checkDir) {
        const linksDir = (checkDir.match(linkRegEx).map(e => e.replace(linkRegEx, "$1")));
        console.log(linksDir);
        return linksDir
    });
}

//     const createArray = (links) => {
//     const linksArray = links.split("");
//     console.log(linksArray);
//     }
// createArray();

console.log(pathExt(pathName));
console.log(mdRead(pathName));
console.log(checkDir(pathName));
console.log(getLinks(pathName));



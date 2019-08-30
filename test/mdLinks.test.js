const mdLinks = require("../mdLinks.js");

test("provided path is an md file", () => {
  return mdLinks.pathExt("./README.md").then(data => {
    expect(data).toBe(true);
    });
});

test("provided file has links", () => {
  return mdLinks.mdRead(linkRegEx.test("./README.md")).toBe(true);
});


// test("provided file has links", () => { expect(mdLinks.mdRead(linkRegEx.test("./README.md"))).toBe(true);
// });

// test("provided path is a directory", () => {
//   expect(mdLinks.checkDir("../node_modules")).toBe(true);
// });

// test("provided directory includes md file", () => {
//   expect(mdLinks.mdSearch("../readme_files")).toBe(true);
// });

// para promesas usar done (en jest)


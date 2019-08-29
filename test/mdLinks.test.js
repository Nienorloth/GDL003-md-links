const mdLinks = require("../mdLinks.js");

test("provided path is md file", () => {
  expect(mdLinks.pathExt("./README.md")).toBe(true);
});

test("provided file has links", () => { expect(mdLinks.mdRead(linkRegEx.test("./README.md"))).toBe(true);
});

// test("provided path is a directory", () => {
//   expect(mdLinks.checkDir("../node_modules")).toBe(true);
// });

// test("provided directory includes md file", () => {
//   expect(mdLinks.mdSearch("../readme_files")).toBe(true);
// });


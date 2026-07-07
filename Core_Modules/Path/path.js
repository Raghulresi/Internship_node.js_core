const path = require("path");

console.log("Path Module Imported");

console.log(path.basename("/users/docs/file.txt")); //return last part of a path

console.log(__dirname); // return the current directory path

console.log(__filename); //return currect file name 

console.log(path.extname("index.html")); //returns the extension of a file.

console.log(path.join("users","docs","file.txt")); //joins multiple path segments into a single path.

console.log(path.resolve("file.txt")); //converts a relative path into an absolute path.

console.log(path.parse("/users/docs/file.txt")); //breaks a path into different parts.

const obj = {
  dir:'/users/docs',
  base:'file.txt'
};
console.log(path.format(obj)); //creates a path string from an object.

console.log(path.normalize("/users//docs/../file.txt")); //removes unnecessary slashes from a path.

console.log(path.relative("/users/docs","/users/images")); //returns the relative path between two paths.

console.log(path.isAbsolute("/users/docs")); //checks whether a path is absolute.

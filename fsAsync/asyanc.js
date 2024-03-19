const fs = require("fs");

// fs.writeFile("add.txt", "Hello MF", (err) => {
//   console.log(err);
// });

// fs.readFile("add.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.appendFile("add.txt", "never", (err) => {
//   console.log(err);
// });

// fs.mkdir("newFolder", (err) => {
//   console.log("Created");
// });

// fs.writeFile("newFolder/bio.txt", "Heoo", (err) => {
//   console.log(err);
// });

// fs.appendFile("newFolder/bio.txt", "Last", (err) => {
//   console.log(err);
// });

// fs.readFile("newFolder/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rename("newFolder/bio.txt", "newFolder/mybio.txt", (err) => {
//   console.log(err);
// });

// fs.unlink("newFolder/mybio.txt", (err) => {
//   console.log(err);
// });

// fs.rmdir("newFolder", (err) => {
//   console.log(err);
// });

const os = require("os");

console.log(os.hostname());
// const freememomry = os.freemem();

// console.log(`${freememomry / 1024 / 1024 / 1024 / 1024}`);

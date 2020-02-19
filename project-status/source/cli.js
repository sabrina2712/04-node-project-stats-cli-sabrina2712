
#!/usr/bin/env node

let fs = require("fs");
fs.readFile("bears.txt", function(err, data) {
  console.log(data);
  //   let bears = data.toString().split("\n");
  //   let bear = bears[Math.floor(Math.random() * bears.length)];
});

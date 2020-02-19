#!/usr/bin/env node

let showHelp = () => {
  console.log("hell lthis is help, run like index.js path");
};

console.log(process.argv);

let [, , ...argv] = process.argv;

console.log(argv);

if (argv.length != 1) {
  showHelp();
  return;
}

let arg = argv[0];
if (arg == "-h") {
  showHelp();
  return;
}

// find it the absolute path e.g. check if canonical path then prepend dirname
// if the path is not a dir, rather a file - show help and return
// find how to read content of a folder
// bla bla bla so forth so on

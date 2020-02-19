const files = require("./lib/files");
console.log("hello");

if (files.directoryExist(".git")) {
  console.log("git repo exist");
  process.exit();
}

if (files.directoryExist()) {
  console.log("package.json");
}

if (files.getFileList("package.json")) {
  console.log(file);
}

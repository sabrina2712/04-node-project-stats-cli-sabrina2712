const fs = require("fs");
const filePath = require("path");

module.exports = {
  gettingCurrentDir() {
    return path.basename(process.cwd());
  },

  directoryExist(filePath) {
    return fs.existsSync(filePath);
  },
  getFileList(filePath) {
    return fs.readdir(filePath, (files, err) => {
      if (err) {
        return console.log("sorry error" + err);
      }

      console.log(files);
    });
  }
};

'use strict';

const fs = require('fs');

module.exports = exports = (pathsArr, callback) => {
  if (!Array.isArray(pathsArr)){
    throw new Error('reader requires paths as an array');
  } else if (pathsArr.length !== 3){
    throw new Error('reader requires three filepaths');
  }

  let mappedFiles = pathsArr.map(file => {
    fs.readFile(file, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback (null, data.toString());
      }
    });
  });

  console.log(mappedFiles);
};

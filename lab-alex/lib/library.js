'use strict';

const fs = require('fs');

module.exports = exports = (pathsArr, callback) => {
  //type guards
  if (!Array.isArray(pathsArr)) {
    throw new Error('reader requires paths as an array');
  } else if (pathsArr.length !== 3) {
    throw new Error('reader requires three filepaths');
  }
  let mappedFiles = [];

  //resolving map of files
  fs.readFile(pathsArr[0], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, mappedFiles.push(data.toString().trim()));
    }
    fs.readFile(pathsArr[1], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, mappedFiles.push(data.toString().trim()));
      }
      fs.readFile(pathsArr[2], (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, mappedFiles.push(data.toString().trim()));
        }
      });
    });
  });
};

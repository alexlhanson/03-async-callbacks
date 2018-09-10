'use strict';

const fs = require('fs');

module.exports = exports = (pathsArr, callback) => {
  //type guards
  if (!Array.isArray(pathsArr)){
    throw new Error('reader requires paths as an array');
  } else if (pathsArr.length !== 3){
    throw new Error('reader requires three filepaths');
  }
  //resolving map of files
  let mappedFiles = pathsArr.map(file => {
    fs.readFile(file, (err, data) => {
      if(err){
        callback(err);
      } else {
        setTimeout(() => {
          console.log('here');
          callback(null, data.toString().trim());
        }, 0);
      }
    });
  });

  console.log(mappedFiles);
};

'use strict';

const fs = require('fs');

module.exports = exports = (pathsArr, callback) => {
  if (pathsArr.length !== 3){throw new Error('Reader requires three filepaths')} 
  else if (!Array.isArray(pathsArr)){throw new Error('Reader requires paths as an array')}

  let mappedFiles = pathsArr.map(file => {
    fs.readFile(file, (err, data) => {
      if (err) {callback(err)}
      else {callback (null,`${data.toString().trim()}, `);}
    })
  })

  console.log(mappedFiles);
}

// exports.readFiles = (arr) => {
//   arr.map(file => exports.readOne(file))
// };
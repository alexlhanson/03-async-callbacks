'use strict';

module.exports = exports = {};


exports.readFile = (file, callback) => {
  let str = 'Mocked File Contents';
  if(file.match(/bad/i)) {
    callback('Invalid File');
  } else {
    callback(undefined, Buffer.alloc(str.length, str));
  }
};
'use strict';

const reader = require('./lib/library.js');

let file1 = `${__dirname}/data/file1.txt`;
let file2 = `${__dirname}/data/file2.txt`;
let file3 = `${__dirname}/data/file3.txt`;

reader([file1, file2, file3], (err, data) => {});
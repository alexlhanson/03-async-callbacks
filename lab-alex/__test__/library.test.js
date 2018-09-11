'use strict';

jest.mock('fs');

const reader = require('../lib/library.js');

let file1 = `${__dirname}/../data/file1.txt`;
let file2 = `${__dirname}/../data/file2.txt`;
let file3 = `${__dirname}/../data/file3.txt`;
let badFile = `${__dirname}/../data/bad.txt`;

describe ('file reader module', () => {

  test('should create an array with the strings from each of the files on success', () => {
    reader([file1, file2, file3], (err, data) => {
      expect(typeof data).toEqual('string');
    });
  });

  test('should return error for filepaths number', () => {
    expect(() => {
      reader([file1, file2, badFile]);
    }).toThrowError(Error);
  });

  test('should return error for filepaths number', () => {
    expect(() => {
      reader([file1, file2]);
    }).toThrowError('reader requires three filepaths');
  });

  test('should return error for incorrect paths type', () => {
    expect(() => {
      reader('asdf');
    }).toThrowError('reader requires paths as an array');
  });

});
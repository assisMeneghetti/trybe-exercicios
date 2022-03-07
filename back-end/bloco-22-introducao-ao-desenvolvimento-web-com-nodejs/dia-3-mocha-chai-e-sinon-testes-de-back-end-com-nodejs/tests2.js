const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai')
const file = require('./file.txt')

console.log(file);

sinon.stub(fs, 'writeFile')
  .returns('')
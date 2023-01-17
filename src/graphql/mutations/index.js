'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const graphschema = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const schema = require(path.join(__dirname, file))
    graphschema[file.slice(0,-3)] = schema;
  });

module.exports = graphschema;

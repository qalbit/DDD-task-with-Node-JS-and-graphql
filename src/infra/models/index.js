'use strict';

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

const connectMongo = async () => {
  try {
    return mongoose.connect('mongodb://127.0.0.1:27017/ddd-task')
  } catch (err) {
    console.log('connection error.')
  }
} 

let mongodb = connectMongo();

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))
    db[file.slice(0,-3)] = model;
  });

db.mongodb = mongodb;
db.mongoose = mongoose;
module.exports = db;

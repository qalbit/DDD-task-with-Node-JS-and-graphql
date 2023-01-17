const mongoose = require('mongoose');

const FruitSchema = new mongoose.Schema({
    name: String,
    limit: Number,
    description: String,
});

const Fruit  = mongoose.model('Fruits', FruitSchema);

module.exports = Fruit;
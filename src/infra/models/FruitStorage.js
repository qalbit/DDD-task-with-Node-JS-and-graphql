const mongoose = require('mongoose');

const FruitStorageSchema = new mongoose.Schema({
    name: String,
    amount: Number,
});

const FruitStorage  = new mongoose.model('FruitStorage', FruitStorageSchema);

module.exports = FruitStorage;
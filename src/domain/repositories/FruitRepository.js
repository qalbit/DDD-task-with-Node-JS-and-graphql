const { Fruit } = require("../../infra/models");

class FruitRepository {
    constructor  () {

    }
    async findFruit (name) {  
        const data = await Fruit.findOne({name: name});
        if (data) {
            return data;
        } else {
            throw new Error('Fruit not found');
        }
    }
}

module.exports = FruitRepository;
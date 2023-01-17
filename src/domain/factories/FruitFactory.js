const { Fruit, FruitStorage } = require("../../infra/models");
const cron = require('../../cronsjobs/cron');

class FruitFactory {
    constructor () {

    }

    async createFruit (data) {
      let test = await Fruit.findOne({name: data.name})
      
      if (data.description.length >= 30) {
          throw new Error('Please enter description less then 30 characters');
      } else if (test && test.name && test.name != '') {
          throw new Error('Fruit already exists!');
      } else {
        cron("Fruit Created");
        return Fruit.create(data);
      }
    }

    async updateFruit (data) {
      let newData = await Fruit.findOne({name: data.name});

      if (data.description.length >= 30) {
        throw new Error('Please enter description less then 30 characters');
      } else if (newData) {
        await Fruit.updateOne({name: data.name, description: data.description});
        let updatedData = await Fruit.findOne({name: data.name});
        cron("Fruit Updated");
        return updatedData;
      } else {
        return new Error("Fruit not exist.")
      }
    }

    async deleteFruit (data) {        
      let fruits = await Fruit.findOne({name: data.name});
      if (fruits) {
        let deleted = await Fruit.deleteOne({name: data.name});
        if (deleted.deletedCount == 1) {
          let data = {message: "Fruit deleted!"};
          cron("Fruit deleted");
          return data;
        }
        // return Fruit.deleteOne({name: data.name});
      } else {
        throw new Error("Fruit not exist.")
      }
    }
}

module.exports = FruitFactory;
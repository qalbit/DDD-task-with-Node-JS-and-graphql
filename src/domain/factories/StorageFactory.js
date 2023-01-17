const { Fruit, FruitStorage } = require("../../infra/models");
const cron = require('../../cronsjobs/cron');

class StorageFactory {
    constructor () {

    }

    async saveFruit (data) {
      let fruits = await Fruit.findOne({name: data.name});

      if (fruits && fruits.limit && (fruits.limit <= data.amount)) {
        return Error('Please enter amount less than limit');
      } else {
        cron("Fruit Stored to Storage.");
        return await FruitStorage.create(data);
      }
    }
    
    async removeFruit (data) {        
      let fruits = await FruitStorage.findOne({name: data.name});

      if (fruits && fruits.amount && (data.amount > fruits.amount) ) {
        throw new Error("fruit with this amount does not exist.")
      } else if (fruits) {
        cron("Fruit Removed from Storage.");
        let deletedData = await FruitStorage.deleteOne({name: data.name});
        if (deletedData.deletedCount == 1) {
          return ({message: "Fruit removed from storage."});
        } else {
          throw new Error("Error while removing fruit from storage.")
        }
      } else {
        throw new Error("Fruit not exist.")
      }
    }
}

module.exports = StorageFactory;
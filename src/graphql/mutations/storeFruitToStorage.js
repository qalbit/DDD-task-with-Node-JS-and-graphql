const graphql = require("graphql");
const { GraphQLInt, GraphQLString } = graphql;
const FruitStorageSchema = require("../Schemas/FruitStorage");
const { FruitStorage } = require("../../infra/models");
const StorageFactory = require("../../domain/factories/StorageFactory");
const StorageFac = new StorageFactory();

const storeFruitToStorage = {
    type: FruitStorageSchema,
    args: {
      name: { type: GraphQLString },
      amount: { type: GraphQLInt }
    },
    resolve(parent, args) {
      let data = {name: args.name, amount: args.amount};
      return StorageFac.saveFruit(data);
    }
};

module.exports = storeFruitToStorage;
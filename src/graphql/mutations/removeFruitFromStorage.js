const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;
const FruitStorageSchema = require("../Schemas/FruitStorage");
const StorageFactory = require("../../domain/factories/StorageFactory");
const StorageFac = new StorageFactory();

const returnType = new GraphQLObjectType({
  name: "removeFruit",
  fields: () => ({
    message: { type: GraphQLString }
  })
});

const removeFruitFromStorage = {
    type: returnType,
    args: {
      name: { type: GraphQLString },
      amount: { type: GraphQLInt }
    },
    resolve(parent, args) {
      let data = {name: args.name, amount: args.amount};
      return StorageFac.removeFruit(data);
    }
};

module.exports = removeFruitFromStorage;
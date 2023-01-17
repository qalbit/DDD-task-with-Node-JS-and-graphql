const graphql = require("graphql");
const { GraphQLInt, GraphQLString } = graphql;
const FruitSchema = require("../Schemas/Fruit");
const { Fruit } = require("../../infra/models");
const FruitFactory = require("../../domain/factories/FruitFactory");
const FruitFac = new FruitFactory();

const UpdateFruitForStorage = {
    type: FruitSchema,
    args: {
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      limit: { type: GraphQLInt }
    },
    resolve(parent, args) {
      let data = {
        name: args.name,
        description: args.description,
        limit: args.limit,
      }
      
      return FruitFac.updateFruit(data);
    },
};

module.exports = UpdateFruitForStorage;
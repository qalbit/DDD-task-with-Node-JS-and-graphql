const graphql = require("graphql");
const { GraphQLInt, GraphQLString } = graphql;
const FruitSchema = require("../Schemas/Fruit");
const { Fruit } = require("../../infra/models");
const FruitFactory = require("../../domain/factories/FruitFactory");
const FruitFac = new FruitFactory();

const createFruitForStorage = {
  type: FruitSchema,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    limit: { type: GraphQLInt },
  },
  resolve(parent, args) {
    data = {
      name: args.name,
      description: args.description,
      limit: args.limit,
    }

    return FruitFac.createFruit(data);
  },
};

module.exports = createFruitForStorage;
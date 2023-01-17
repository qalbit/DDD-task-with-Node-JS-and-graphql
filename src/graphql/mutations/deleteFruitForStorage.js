const graphql = require("graphql");
const { GraphQLObjectType, GraphQLBoolean, GraphQLString } = graphql;

const FruitFactory = require("../../domain/factories/FruitFactory");
const FruitFac = new FruitFactory();

const returnType = new GraphQLObjectType({
  name: "deleteFruit",
  fields: () => ({
    message: { type: GraphQLString }
  })
});

const deleteFruitForStorage = {
    type: returnType,
    args: {
      name: { type: GraphQLString },
      forceDelete: { type: GraphQLBoolean }
    },
    resolve(parent, args) {
      let data = { name: args.name };
      return FruitFac.deleteFruit(data);
    },
}

module.exports = deleteFruitForStorage;
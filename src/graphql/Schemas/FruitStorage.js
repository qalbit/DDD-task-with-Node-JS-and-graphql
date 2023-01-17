const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const FruitStorageSchema = new GraphQLObjectType({
  name: "FruitStorage",
  fields: () => ({
    name: { type: GraphQLString },
    amount: { type: GraphQLInt }
  }),
});

module.exports = FruitStorageSchema;
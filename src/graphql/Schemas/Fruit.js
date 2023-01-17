const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const FruitSchema = new GraphQLObjectType({
  name: "Fruit",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    limit: { type: GraphQLInt }
  }),
});

module.exports = FruitSchema;
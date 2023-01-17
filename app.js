const { Fruit, FruitStorage } = require('./src/infra/models');
const express = require('express');
const app = express();
const PORT = 4000;

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString,  GraphQLBoolean, GraphQLList } = graphql;
const { graphqlHTTP } = require('express-graphql');
const FruitSchema = require('./src/graphql/Schemas/Fruit');

const { createFruitForStorage, UpdateFruitForStorage, deleteFruitForStorage, storeFruitToStorage, removeFruitFromStorage } = require('./src/graphql/mutations');
const findFruit = require('./src/graphql/queries/findFruit');

const Query = new GraphQLObjectType({
    name: "findFruit",
    fields: {
      findFruit: findFruit
    },
});

const Mutation = new GraphQLObjectType({
    name: "FruitMutations",
    fields: {
      createFruitForStorage: createFruitForStorage,
      UpdateFruitForStorage: UpdateFruitForStorage,
      deleteFruitForStorage: deleteFruitForStorage,
      storeFruitToStorage: storeFruitToStorage,
      removeFruitFromStorage: removeFruitFromStorage,
    },
});

const schema = new graphql.GraphQLSchema({query: Query, mutation: Mutation})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: (err) => {
      return ({message: err.message});
    }
}));

app.listen(PORT, () => {  
  console.log("Server started");
});

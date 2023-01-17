const FruitSchema = require("../Schemas/Fruit");
const graphql = require("graphql");
const { GraphQLString } = graphql;
const { Fruit } = require("../../infra/models");
const FruitRepository = require("../../domain/repositories/FruitRepository");
const FruitRepo = new FruitRepository();

const findFruit = {
    type: FruitSchema,
    args: { name: { type: GraphQLString } },
    resolve(parent, args) {
        return FruitRepo.findFruit(args.name);
    }
};

module.exports = findFruit;
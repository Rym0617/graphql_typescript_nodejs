import "graphql-import-node";
// import typeDefs from './schema.graphql';
import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import { characterResolver } from "../resolvers/character";
import { gameResolver } from "../resolvers/game";
import { developerResolver } from "../resolvers/developer";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { userResolver } from "../resolvers/user";
import { personResolver } from "../resolvers/person";

const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), {
  all: true,
});

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: [
    characterResolver,
    gameResolver,
    developerResolver,
    userResolver,
    personResolver,
  ],
});

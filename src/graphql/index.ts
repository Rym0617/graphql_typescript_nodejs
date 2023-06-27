import { GraphQLSchema } from "graphql";
import { mergeSchemas, makeExecutableSchema } from "graphql-tools";
import "graphql-import-node";
import character from "./schemas/objects/character";
import game from "./schemas/objects/game";
import user from "./schemas/objects/user";
import developer from "./schemas/objects/developer";
import person from "./schemas/objects/person.graphql";
import { characterResolver } from "./resolvers/character";
import { developerResolver } from "./resolvers/developer";
import { gameResolver } from "./resolvers/game";
import { userResolver } from "./resolvers/user";
import { personResolver } from "./resolvers/person";

export const schema: GraphQLSchema = mergeSchemas({
  schemas: [character, game, user, developer, person],
  resolvers: [
    characterResolver,
    gameResolver,
    userResolver,
    developerResolver,
    personResolver,
  ],
});

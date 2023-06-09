import 'graphql-import-node';
// import typeDefs from './schema.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import resolvers from '../resolvers/index';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), { all: true })

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});
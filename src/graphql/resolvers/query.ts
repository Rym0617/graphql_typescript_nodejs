import { IResolvers } from "graphql-tools";
// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world!!';
        }

    }
}

export default resolvers;
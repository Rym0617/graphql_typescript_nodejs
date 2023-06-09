const express = require('express')
const cors = require('cors')
import { graphqlHTTP } from 'express-graphql'
/* const { schema } = require('./graphql') */
import { schema } from './graphql/schemas/schema'
const app = express();
app.use(cors())

/* const server = new ApolloServer({
    schema,
    playground: true, //habilitar el cliente donde se haran las queries
    introspection: true //brindar el schema graphql en el momento en el qye esten en el cliente
})

server.applyMiddleware({ app }) */
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log(`http://localhost:5000`)

});


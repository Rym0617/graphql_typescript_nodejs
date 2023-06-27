const express = require('express')
const cors = require('cors')
import { graphqlHTTP } from 'express-graphql'
import { schema } from './graphql/schemas/schema'
import config from './config'
import { connectDB } from './mongo/connection'

connectDB()

const app = express();
app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}/graphql`)

});


import { buildSchema } from 'graphql'

const Query = `
type Query{
    hello: String!
    getCharacters: [Character!]
}

type Character{
    id: ID
    name: String
    race: Race
}
  
enum Race{
    HYLIAN
    GERUDO
    FAIRY
}

`;

export default Query;
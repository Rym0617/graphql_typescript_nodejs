import { IResolvers } from 'graphql-tools'

const character: IResolvers = {
    Query: {
        getCharacters() {
            return [
                {
                    id: 1,
                    name: 'Link',
                    race: "GERUDO"
                },
                {
                    id: 2,
                    name: 'Zelda',
                    race: "HYLIAN"
                }

            ]
        }
    }
}

export default character;
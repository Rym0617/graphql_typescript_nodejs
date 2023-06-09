import { IResolvers } from 'graphql-tools';
import query from './query';
import character from './character'
import game from './game'
import GMR from 'graphql-merge-resolvers'

const resolvers: any = GMR.merge([
    character,
    game,
    query
])
/* const resolversMap: IResolvers = {
    ...query
}; */
export default resolvers;



/* const resolvers: IResolvers = {
    Query: {
        hello() {
            return "World";
        },
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
        },
        /* 
                getGames() {
                    return [
                        {
                            id: 1,
                            title: "CrashBandicot"
                        }
                    ]
                } 
    }
} */



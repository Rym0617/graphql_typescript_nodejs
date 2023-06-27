import { IResolvers } from 'graphql-tools'
import Game from '../../models/gameSchema'
import Developer from '../../models/developerSchema'

export const gameResolver: IResolvers = {
    Query: {
        games() {
            return Game.find()

        }
    },

    Mutation: {
        async createGame(root: void, args: any) {
            try {
                const game = new Game(args.game)
                await game.save()
                /*  data.games.push(args.game) */
                return game
            } catch (error) {
                console.log(error)
            }

        }
    },
    Game: {
        async developers(parent: any, args: void) {
            try {
                const devList = parent.developers.map(
                    async (id: String) => await Developer.findById(id)
                )
                console.log(devList)
                return devList
            } catch (error) {
                console.log(error)
            }
        }
    }
}

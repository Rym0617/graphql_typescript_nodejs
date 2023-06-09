import { IResolvers } from 'graphql-tools'

const game: IResolvers = {
    Query: {
        getGames() {
            return [
                {
                    id: 1,
                    title: "CrashBandicot"
                }
            ]
        }
    }
}

export default game;
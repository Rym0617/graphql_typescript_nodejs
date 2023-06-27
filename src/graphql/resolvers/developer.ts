import { IResolvers } from 'graphql-tools'
import Developer from '../../models/developerSchema'

export const developerResolver: IResolvers = {
    Query: {
        async getDeveloper(root: void, args: void) {
            try {
                return await Developer.find()
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        async createDeveloper(root: void, args: any) {
            try {
                const developer = new Developer(args.developer)
                console.log(developer)
                await developer.save()
                return developer
            } catch (error) {
                console.log(error)
            }
        }
    }
}


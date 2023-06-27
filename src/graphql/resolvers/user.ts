import { IResolvers } from 'graphql-tools'
import { Db } from 'mongodb'
import User from './../../models/userSchema'
import { createJWTToken } from '../../utils/auth'

export const userResolver: IResolvers = {
    Query: {
        async getUsers(root: void, args: void) {
            try {
                return await User.find()
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        async createUser(root: void, args: any) {
            try {
                console.log(args.user)
                const user = new User(args.user)
                console.log(user)
                await user.save()
                return user
            } catch (error) {
                console.log(error)
            }
        },

        /*  async login(root: void, args: any) {
             const user = User.findOne({ email: args.email }).select("+password")
             if (!user || user.password !== args.password) throw new Error("Invalid Credentials!")
             const token = createJWTToken({ _id: user._id, username: user.username, email: user.email, nickname: user.nickname })
             return token
         } */
    }
}
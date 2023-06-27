import { IResolvers } from 'graphql-tools'
import { Db } from 'mongodb'
import Character from './../../models/characterSchema'
import Game from '../../models/gameSchema'
import { ObjectId } from 'bson';
import { Error } from 'mongoose';
import { ICharacter } from '../../interfaces/ICharacter'

export const characterResolver: IResolvers = {
    Query: {
        async getCharacters(root: void, args: void, context: { db: Db }) {
            try {
                return await Character.find();
            }
            catch (error) {
                console.log(error)
            }
        },
        async getCharacter(root: void, args: any) {
            try {
                const found = await Character.findById(args._id)
                console.log(found)
                /* const [found] = data.characters.filter(ch => ch._id === args._id) */
                return found
            } catch (error) {
                console.log(error)
            }

        }
    },
    Mutation: {
        async createCharacter(root: void, args: any, context: { db: Db }) {
            try {
                //'i': significa que es insensitive la busqueda en la BD
                const regexp = new RegExp(args.character.name, 'i')
                console.log(regexp)
                const exists = await Character.findOne({ name: regexp })
                if (exists) throw new Error(`Character already exists!`)
                const character = new Character(args.character)
                await character.save()
                /* data.characters.push(args.character) */
                return `Character saved successfully`
            } catch (error) {
                console.log(error)
            }

        },
        async updateCharacter(root: void, { _id, character }: { _id: string, character: ICharacter }) {
            try {
                const exists = await Character.findOne({ _id: _id })
                if (!exists) throw new Error(`Character does not exists`)
                const updateCharacter = await Character.findOneAndUpdate(
                    { _id: _id },
                    { $set: character },
                    {
                        new: true, //devuelve el objeto actualizado
                    }
                )

                return `Character updated successfully`
            } catch (error) {
                console.log(error)
            }
        },
        async deleteCharacter(root: void, args: any) {
            try {
                const deleteCharacter = await Character.findOneAndDelete({ _id: args._id })
                if (!deleteCharacter) throw new Error("Character not found!");
                return `Character deleted succesfully`

            } catch (error) {
                console.log(error)
            }
        }

    },
    Character: {
        async games(parent: ICharacter, args: void) {
            try {
                const gameList = parent.games.map(
                    async (gameId: String) => await Game.findById(gameId)
                )
                /* parent.games.map((gameId: String) =>
                    gameList.push(...data.games.filter(game => game._id === gameId))
                ) */
                console.log(gameList)
                return gameList
            } catch (error) {
                console.log(error)
            }
        }
    }
}
// Union types puede devolver uno u otro valor
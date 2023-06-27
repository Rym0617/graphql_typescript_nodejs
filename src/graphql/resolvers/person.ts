import { IResolvers } from "graphql-tools";
import Person from "../../models/personSchema";
import data from "../../data/data.json";

export const personResolver: IResolvers = {
  Query: {
    async getPersons(root: void, args: void) {
      try {
        return Person.find();
      } catch (error) {
        console.log(error);
      }
    },
    async getPerson(root: void, args: any) {
      try {
        //return await Person.findById(_id);
        const [found] = data.people.filter((p) => p._id === args.id);
        // console.log(found);
        return found;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {},
  Person: {
    __resolveType(obj: any) {
      console.log(obj);
      return obj.age ? "Male" : "Female";
    },
  },
};

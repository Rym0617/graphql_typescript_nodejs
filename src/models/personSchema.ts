import {Schema, model} from 'mongoose'

const personModelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
},
 {
    timestamps: true
 });
 
 const personModel = model('Person', personModelSchema)
 export default personModel
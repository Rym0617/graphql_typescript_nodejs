import { Schema, model } from 'mongoose'

const developerModelSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    });

const developerModel = model('Developer', developerModelSchema)
export default developerModel
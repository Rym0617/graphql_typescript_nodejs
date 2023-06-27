import { Schema, model } from 'mongoose'
import Game from '../models/gameSchema'

const characterModelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    games: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: false
    }

},
    {
        timestamps: true,
        versionKey: false,
    }
);

const characterModel = model('Character', characterModelSchema)
export default characterModel
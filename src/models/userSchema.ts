import { Schema, model } from 'mongoose'
/* 
match: [
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    "Provide a valid email address",
] */
const userschema = new Schema({
    username: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    })

const userModel = model('User', userschema)
export default userModel
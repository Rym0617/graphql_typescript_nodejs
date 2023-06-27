import mongoose from 'mongoose'
import config from '../config'

export const connectDB = async () => {
    await mongoose.connect(`${config.mongoUri}${config.dbName}`)
    console.log("MongoDB connected")
}

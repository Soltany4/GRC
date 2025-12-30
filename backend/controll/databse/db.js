import mongoose from "mongoose";

const DB_URL = "mongodb+srv://root:root@employeecluster.plg4tdf.mongodb.net/grc?retryWrites=true&w=majority"
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URL)
        console.log(`Mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
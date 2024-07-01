import mongoose from "mongoose"

const connectDB = ( async(req,res)=>{
    try {
        const mongoconnect = await mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_NAME}`)

        console.log("MONGO DB CONNECTED!!!");
    } catch (error) {
        console.log("MONGO CONNNECTION FAILED!!!",error)
        process.exit(1)
    }
})

export {connectDB}
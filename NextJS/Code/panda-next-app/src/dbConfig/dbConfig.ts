import mongoose from "mongoose"

    
export async function connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Mongodb connect successfully.")
        })

        connection.on('error',(error)=>{
            console.log("MongoDB connection error. Please make sure mognodb is running.", error)
        })
    } catch (error) {
        console.log("someting goes wrong")
        console.log(error)
    }
}
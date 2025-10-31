import mongoose from "mongoose";
import colors from "colors";

const connectDB = async() => {
    try{
        const conne = await mongoose.connect(process.env.MONGO_UPL);
        console.log(`Connected To Mongodb Database ${conne.connection.host}`.bgMagenta.white)
    } catch (error){
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
}

export default connectDB;
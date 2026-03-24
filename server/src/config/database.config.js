import mongoose from "mongoose";
import { MONGO_URI } from "./env.config.js";

const connectToDB = () => {
    mongoose.connect(MONGO_URI)
        .then(r => console.log("DataBase Connected Successfully.")) 
        .catch(err => console.log(err.message))
}

export default connectToDB;
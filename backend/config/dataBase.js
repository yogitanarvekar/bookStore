import mongoose from "mongoose";
import { mongodburl } from "./config.js";


const connectDatabase = ()=>{
    mongoose.connect(mongodburl)
    .then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default connectDatabase


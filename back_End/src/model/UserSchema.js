import { Schema } from "mongoose";
import mongoose from "mongoose";

const user = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    number:{
        type:String
    },
    password:{
        type:String
    },
    status:{
        type:String,
        default:"active"
    },
    role:{
        type:String,
        default:"user"
    }
},{ timestamps: true })
export default mongoose.model("User", user)
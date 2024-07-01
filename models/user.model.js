import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    username: {
        type:String,
        reqired:true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true
    },


},{
    timestamps:true
})



export const User = mongoose.model("User",Userschema)
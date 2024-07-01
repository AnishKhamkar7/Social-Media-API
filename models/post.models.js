import mongoose, { Schema } from "mongoose";

const Postschema = new mongoose.Schema({
    PostUrl: {              //cloudinary url
        type: String,
        required: true
    },
    caption:{
        type:String,
    },
    Owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


},{
    timestamps:true
})



export const Post = mongoose.model("Post",Postschema)
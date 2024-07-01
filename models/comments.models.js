import mongoose, { Schema } from "mongoose";

const Commentschema = new mongoose.Schema({
    commentText:{ 
        type:String,
        required: true
    },
    OwnerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    },
    {
    timestamps:true
})



export const Comment = mongoose.model("Comment",Commentschema)
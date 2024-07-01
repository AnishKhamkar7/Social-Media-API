import mongoose, { Schema } from "mongoose";

const Likeschema = new mongoose.Schema({
    PostLikedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    CommentLikedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Commment"
    }
    },
    {
    timestamps:true
})



export const Like = mongoose.model("Like",Likeschema)
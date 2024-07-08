import mongoose, { Schema } from "mongoose";

const Likeschema = new mongoose.Schema({
    PostLikedOnID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    CommentLikedOnID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Commment"
    }
    },
    {
    timestamps:true
})



export const Like = mongoose.model("Like",Likeschema)
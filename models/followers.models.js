import mongoose from "mongoose";

const FollowerSchema  = new mongoose.Schema(
    {
        follower: {
            type: mongoose.Schema.Types.ObjectId, //One who is the follower
            ref: "User"
        },
        page:{
            type: mongoose.Schema.Types.ObjectId, //One to whom "follower" is follwoing
            ref: "User"
        }

},{timestamps: true})


export const Follow = mongoose.model("Follow",FollowerSchema)
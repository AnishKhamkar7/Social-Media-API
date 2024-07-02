import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    username: {
        type:String,
        reqired:true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: [true,"Password is required"]
    },
    email: {
        type:String,
        required:true,
        unique: true,
        lowercase: true
    },
    refreshToken:{
        type: String
    }
},{
    timestamps:true
})

const PassSave = Userschema.pre("save",(next)=>{
    if(!this.isModified("password")){
        return next()
    }

    

})



export const User = mongoose.model("User",Userschema)
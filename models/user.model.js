import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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

Userschema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }
//10 is the salt value
    this.password = await bcrypt.hash(this.password, 10)
    next()

})

Userschema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)

}

Userschema.methods.generateAccessToekn = function(){
    return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        password: this.password
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });


}

Userschema.methods.generateRefreshToekn = function(){
    return jwt.sign({
        _id: this._id

    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    });

    

}


export const User = mongoose.model("User",Userschema)


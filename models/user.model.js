import mongoose from "mongoose";
import bcrypt from "bcrypt"

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

const checkPassword = (async function(password){
    const resultPass = await bcrypt.compare(password,this.password)

    return resultPass
}
)


export const User = mongoose.model("User",Userschema)

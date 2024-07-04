import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

const vertfyJWT = async(req,res,next) =>{
    try {
        const access = req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer ","")

        if(!access){
            res.status(401).json("Unauthorized Access")
        }

        const verification = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(verification._id)

        if(!user){
            return res.status(400).json("Invalid UseriD access")
        }

        req.user = user
        next();
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}
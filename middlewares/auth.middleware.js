import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import cookieParser from "cookie-parser";
import { loginUser } from "../controllers/user.controllers.js";

const vertfyJWT = async(req,res,next) =>{
    try {
        const access = req.cookies?.AccesToken || req.header("Authorization")?.replace("Bearer ","")


        const verification = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(verification._id)

        if(!user){
            return res.status(400).json("Invalid UseriD access")
        }

        req.user = user
        next();

    } catch (error) {
        res.status(400).json({
            message:"hello"
        })
    }
}

export { vertfyJWT }
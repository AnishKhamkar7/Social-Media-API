import { User } from "../models/user.model"


const registerUser = (async(req,res)=>{
    try {
        //get details from req.body
        const { username,password,email } = req.body


        //check if all the required fields are filled
        if(!username || !password || !email){
            res
            .status(400)
            .json("All Fields are required")
        }

        //check if the user is already in the databse or not

        const userAvail = await User.findOne({
            $or:[{username},{email}]
        })

        //if found then return user already exists

        if (userAvail) {
            res
            .status(409)
            .json("Username or email already exists")
        }

        //save the data into the model

        await User.create({
            username: username,
            password: password
        })


    } catch (error) {
        
    }
})
import { User } from "../models/user.model.js"



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



        const user = await User.create({
            username: username,
            password: password,
            email: email
        })
        //find the user into the database and if not return error
        const createdUser = await User.findById(user._id).select("-password -refreshToken")

        if (!createdUser) {
            res
            .status(500)
            .json({
                message: "Something went wrong"
            })
        }

        return res.status(200)
        .json(createdUser)


    } catch (error) {
        res
        .status(500)
        .json({
                message: error.message
            })
        
    }
})


const loginUser = (async(req,res)=>{
    try {
        const { username, email, password } = req.body

    const checkUser = await User.findOne({
        $or:[{username},{email}]
    })

    if(!checkUser){
        res
        .status(400)
        .json("user not registered")
    }






    } catch (error) {
        
    }
})

export { registerUser, loginUser }
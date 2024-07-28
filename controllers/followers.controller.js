import { User } from "../models/user.model.js"
import { Follow } from "../models/followers.models.js"


const followUser = async(req,res)=>{
    try {
        const user = req.user   
    
        const { User_id } = req.params
    
        const checkuser = await User.findById(User_id)
        
        //check user avialability

        if (!checkuser || !user) {
            return res.status(400).json({
                message: "User Not found"
            })
        }

        //once the user is valid then check if you already have followed the user or not

        const vertifyfollower = await Like.findOne({
            follower: user._id,
            page: checkuser._id
        })

        if(vertifyfollower){
            return res.status(400).json({
                message: "You have already Followed this account"
            })
        }
        
        //save follower 

        const saveFollow = await Follow.create({
            follower: user._id,
            page: checkuser._id
        })

        if (!saveFollow) {
            return res.status(400).json({
                message:"Unable to follow this User"
            })
        }

        return res.status(200).json({
            message: "You Followed this User"
        })   

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

const unfollowUser = async(req,res)=>{
    try {
        const user = req.user

        const { User_id } = req.params

        const checkuser = await User.findById(User_id)

        if (!checkuser || !user) {
            return res.status(400).json({
                message:"User not found"
            })
        }

        const verifyFollower = await Follow.findOne({
            follower: user._id,
            page: checkuser._id
        })

        if (!verifyFollower) {
            return res.status(400).json({
                message:"You cannot unfollow this User again"
            })
        }

        await Follow.deleteOne({
            _id: verifyFollower._id
        })

        const crossCheck = await Follow.findById(verifyFollower._id)

        if (crossCheck) {
            return res.status(400).json({
                message:"User Unfollow failed !!!"
            })
        }

        return res.status(200).json({
            message: "You Unfollowed this User"
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export { followUser,unfollowUser }
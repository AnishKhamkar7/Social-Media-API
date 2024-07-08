import { Like } from "../models/likes.models.js";
import { Post } from "../models/post.models.js";


const LikePost = async(req,res)=>{
    try {
        //fetch id from the url
        const { _id } = req.params
        //get this user because if you are able to like then you must be loggedin
        const user = req.user
  
        const getpost = await Post.findById(_id)
        
        if (!getpost) {
            return res
            .status(400)
            .json("Post ID invalid or not available")
        }

        //first check whether the user has alreaday liked the post or not

        const vertifylike = await Like.findOne({
            PostLikedOnID: getpost._id,
            UserID: user._id
        })

        if(vertifylike){
            return res.status(400).json({ message: 'User has already liked this post' })
        }
        //save details into the model
        const savelike = await Like.create({
            PostLikedOnID: getpost._id,
            UserID: user._id
        })

        if (!savelike) {
            return res.status(400).json({ message: 'Unable to like this post' })
        }

        return res.status(200).json({
            message: "Liked this post"
        })
    
      
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

   
}

export { LikePost }
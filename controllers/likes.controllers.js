import { Like } from "../models/likes.models.js";
import { Post } from "../models/post.models.js";
import { Comment } from "../models/comments.models.js";


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
        console.log(savelike)
    
      
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

   
}

const LikeComment = async(req,res) =>{
    try {
        const { _id } = req.params

        const user = req.user

        const getcomment = await Comment.findById(_id)

        if(!getcomment) {
            return res.status(400).json({message: "comment ID not found or unavailable"})
        }

        const vertfylike = await Like.findOne({
            UserID: user._id,
            CommentLikedOnID: getcomment._id
        })

        if(vertfylike){
            return res.status(400).json({message: "You have already liked this comment"})
        }

        const savelike = await Like.create({
            UserID: user._id,
            CommentLikedOnID: getcomment._id
        })

        if (!savelike) {
            return res.status(400).json({message:error.message})
        
        }
        
        return res.status(200).json({
            message: "Liked this comment"
        })

        console.log(savelike)
        



    } catch (error) {
       res.status(400).json({message: error.message})
        
    }
}

//delete like on post and comment --->

const UnlikePost = async(req,res) =>{
  try {
      const { _id } = req.params
  
      const user = req.user
  
      const getPost = await Post.findById(_id)
        
        if (!getPost) {
            return res
            .status(400)
            .json("Post ID invalid or not available")
        }

        //first check whether the user has alreaday unliked the post or not

        const verifyUnlike = await Like.findOne({
            PostLikedOnID: getPost._id,
            UserID: user._id
        })

        if(!verifyUnlike){
            return res.status(400).json({ message: 'You cannot unlike the post again' })
        }

        await Like.deleteOne({_id: verifyUnlike._id})

        const crossverify = await Like.findById(verifyUnlike._id)

        if (crossverify) {
            return res.status(400).json({message:"somwthing went wrong druing unnlike"})
        }

        return res.status(200).json({message: "Unliked sucessfully"})
  
  } catch (error) {
    return res.status(400).json({"ERROR:":error})

  }
}


export { LikePost,LikeComment, UnlikePost  }
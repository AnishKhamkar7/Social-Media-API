import { Post } from "../models/post.models.js"
import { Comment } from "../models/comments.models.js"

const uploadComment = (async(req,res)=>{
   try {
    const { _id } = req.params

    const getpost = await Post.findById(_id)

    if (!getpost) {
        return res
        .status(500)
        .json({
            message: "ERROR WHILE RETIREVEING THE POST ID"
        })
        console.log("ERROR WHILE RETIREVEING THE POST ID");
    }

    const user = req.user

    const { commentText } = req.body

    const createdComment = await Comment.create({
        OwnerID: user._id,
        onPost: getpost,
        commentText,
    })
    
    if(!createdComment){
    res
    .status(400)
    .json("EROOR WHILE SAVING THE COMMENT")
    console.log("EROOR WHILE SAVING THE COMMENT");
    }
    
    return res
    .status(200)
    .json(createdComment)
    } catch (error) {
    res
    .status(500)
    .json({
        message: error.message
    })
    console.log(error)
    
   }
})

export { uploadComment }
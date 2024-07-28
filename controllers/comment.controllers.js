import { Post } from "../models/post.models.js"
import { Comment } from "../models/comments.models.js"

const uploadComment = (async(req,res)=>{
   try {
    const { Post_id } = req.params

    const getpost = await Post.findById(Post_id)

    if (!getpost) {
        return res
        .status(500)
        .json({
            message: "ERROR WHILE RETIREVEING THE POST ID"
        })
    }

    const user = req.user

    const { commentText } = req.body

    const createdComment = await Comment.create({
        OwnerID: user._id,
        onPost: getpost,
        commentText,
    })
    
    if(!createdComment){
    return res
    .status(400)
    .json("EROOR WHILE SAVING THE COMMENT")
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
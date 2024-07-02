import { Post } from "../models/post.models.js"
import { Comment } from "../models/comments.models.js"


const Uploadtext = (async(req,res) =>{
   try {
    const { textPost } = req.body
    const postText = await Post.create({textPost})

    if(!postText){
        res.status(400).json({
            message: "upload failed"
        })
    }
    return res
    .status(200)
    .json("Post uploaded sucefully")

   } catch (error) {
    res.status(400).json(postText)
    console.log("text post failed",error);

    
   }
})

const ViewPosts = (async(req,res)=>{
    try {
        const viewposts = await Post.find({})

        if (!viewposts) {
            res.status(400).json({
                message: "Cannot retireve posts!"
            })
        }

        return res
        .status(200)
        .json(viewposts)
    } catch (error) {
        res.status(400).json(postText)
        console.log("text post failed",error);
        
    }
})

const viewSinglePost = (async(req,res)=>{
    try {
        const { _id } = req.params
    
        if (!_id) {
            res
            .status(400)
            .json("Invalid post ID")
            console.log("Invalid post ID");
        }

        const hello = await Post.findById(_id)
    
        
        const postwithcom = await Post.aggregate([
            {
                $match:{
                    _id: hello._id
                }
            },

            {
                $lookup:{
                    from: "comments",
                    as: "PostwithComment",
                    localField: "_id",
                    foreignField: "onPost"
    
                }
            },
            {
                $addFields:{
                    CommentCount: {
                        $size: "$PostwithComment"
                    }

                }
            },
            {
                $unwind: {
                  path: '$PostwithComment',
                  preserveNullAndEmptyArrays: true // Preserve posts without comments
                },
            },
            {
                $group: {
                    _id: '$_id',
                    textPost: { $first: '$textPost' },
                    Comments: { $push: '$PostwithComment.commentText' },
                    CommentCount: {$first: "$CommentCount"}
                }
            },
            {
                $project:{
                    _id: 1,
                    textPost: 1,
                    CommentCount: 1,
                    Comments: 1
                    
                }
            }
        ])
        console.log(postwithcom);
    
        if(!postwithcom?.length){
            res.status(401)
            .json("POST DOES NOT EXISTS")
            console.log("POST RENDER ERROR");
        }
    
        return res
        .status(200)
        .json(postwithcom[0])
        // console.log(postwithcom)
    
    } catch (error) {
        res.status(400)
        .json({
            message: error.message
        })
        
    }
})

export { Uploadtext,
    ViewPosts,
    viewSinglePost
 }
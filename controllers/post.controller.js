import { Post } from "../models/post.models.js"


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

export { Uploadtext,
    ViewPosts
 }
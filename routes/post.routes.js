import { Router } from "express";
import { Uploadtext, ViewPosts, viewSinglePost, } from "../controllers/post.controller.js";
import { uploadComment } from "../controllers/comment.controllers.js";
import { registerUser, loginUser, updateProfile } from "../controllers/user.controllers.js";
import { vertfyJWT } from "../middlewares/auth.middleware.js";
import { LikeComment, LikePost, UnlikePost } from "../controllers/likes.controllers.js";
import { followUser, unfollowUser } from "../controllers/followers.controller.js";


const router = Router()

//register user
router.route("/register").post(registerUser)

//user login
router.route("/login").post(loginUser)

//update User profile
router.route("/updateProfile").post(vertfyJWT,updateProfile)

// upload text
router.route('/textpost/upload').post(vertfyJWT,Uploadtext)

//like post
router.route("/textpost/like/:Post_id").post(vertfyJWT,LikePost)

//upload comments on accounts post
router.route("/comment/:Post_id").post(vertfyJWT,uploadComment)

//like comment
router.route("/comment/like/:Comment_id").post(vertfyJWT,LikeComment)

//unlike post
router.route("/textpost/unlike/:_id").post(vertfyJWT,UnlikePost)

//follow User
router.route("/follow/:_id").post(vertfyJWT,followUser)

// unfollow User
router.route("/unfollow/:_id").post(vertfyJWT,unfollowUser)




export default router
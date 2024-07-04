import { Router } from "express";
import { Uploadtext, ViewPosts, viewSinglePost, } from "../controllers/post.controller.js";
import { uploadComment } from "../controllers/comment.controllers.js";
import { registerUser, loginUser } from "../controllers/user.controllers.js";

const router = Router()
// upload text
router.route('/textpost/upload').post(Uploadtext)
//view posts from users
router.route("/textpost").get(ViewPosts)
//upload comments on sepcific post
router.route("/comment/:_id").post(uploadComment)
//view single post with comments on it
router.route("/textpost/:_id").get(viewSinglePost)

//register user
router.route("/register").post(registerUser)
//user login

router.route("/login").post(loginUser)

export default router
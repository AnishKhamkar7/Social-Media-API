import { ViewPosts,viewSinglePost } from "../controllers/post.controller.js";
import { Router } from "express";

const router = Router()


//view posts from users
router.route("/textpost").get(ViewPosts)

//view single post with comments on it
router.route("/textpost/:Post_id").get(viewSinglePost)

export default router
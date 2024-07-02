import { Router } from "express";
import { Uploadtext, ViewPosts, viewSinglePost } from "../controllers/post.controller.js";
import { uploadComment } from "../controllers/comment.controllers.js";

const router = Router()

router.route('/textpost/upload').post(Uploadtext)

router.route("/textpost").get(ViewPosts)

router.route("/comment/:_id").post(uploadComment)

router.route("/textpost/:_id").get(viewSinglePost)


export default router
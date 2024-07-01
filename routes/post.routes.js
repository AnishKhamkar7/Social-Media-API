import { Router } from "express";
import { Uploadtext, ViewPosts } from "../controllers/post.controller.js";
import { uploadComment } from "../controllers/comment.controllers.js";

const router = Router()

router.route('/textpost').post(Uploadtext)

router.route("/").get(ViewPosts)

router.route("/comment/:_id").post(uploadComment)


export default router
import { Router } from "express";
import { Uploadtext, ViewPosts } from "../controllers/post.controller.js";

const router = Router()

router.route('/textpost').post(Uploadtext)

router.route("/").get(ViewPosts)


export default router
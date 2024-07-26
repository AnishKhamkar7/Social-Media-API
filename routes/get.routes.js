import { ViewPosts,viewSinglePost } from "../controllers/post.controller.js";


//view posts from users
router.route("/textpost").get(ViewPosts)

//view single post with comments on it
router.route("/textpost/:Post_id").get(viewSinglePost)
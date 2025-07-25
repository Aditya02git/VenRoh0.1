import  express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createPost, getFeedPosts ,deletePost, getPostById, createComment, likePost } from "../controllers/post.controller.js";


const router = express.Router();

router.get("/", protectRoute, getFeedPosts);//for feed of posts

router.post("/create", protectRoute, createPost);//for creating posts
router.delete("/delete/:id", protectRoute, deletePost);//for deleting a post
router.get("/:id", protectRoute, getPostById);
router.get("/:id/comment", protectRoute, createComment);
router.get("/:id/like", protectRoute, likePost);

export default router;
const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");

// GET all posts
router.get("/", postsCtrl.allPosts);

// GET one post
router.get("/:id", postsCtrl.getPost);

// POST a new post
router.post("/", postsCtrl.createPost);

// DELETE a post
router.delete("/:id", postsCtrl.deletePost);

// EDIT a post
router.patch("/:id", postsCtrl.updatePost);

// ADD a like to a post
router.post("/:id/like", postsCtrl.addLike);

// REMOVE a like from a post
router.delete("/:id/like", postsCtrl.removeLike);

module.exports = router;

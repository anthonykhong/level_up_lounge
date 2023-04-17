const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");

// GET all posts
router.get("/posts", postsCtrl.allPosts);

// GET one post
router.get("/posts/:id", postsCtrl.getPost);

// POST a new post
router.post("/posts", postsCtrl.createPost);

// DELETE a post
router.delete("/posts/:id", postsCtrl.deletePost);

// EDIT a post
router.patch("/posts/:id", postsCtrl.updatePost);

module.exports = router;

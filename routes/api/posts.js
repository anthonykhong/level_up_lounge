const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");

// GET all posts
router.get("/posts", (req, res) => {
  res.json({ mssg: "Get all posts" });
});

// GET one post
router.get("/posts/:id", (req, res) => {
  res.json({ mssg: "Get one post" });
});

// POST a new post
router.post("/posts", postsCtrl.createPost);

// DELETE a post
router.delete("/posts/:id", (req, res) => {
  res.json({ mssg: "DELETE a post" });
});

// EDIT a post
router.patch("/posts/:id", (req, res) => {
  res.json({ mssg: "EDIT a post" });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");

router.post("/posts", postsCtrl.createPost);

module.exports = router;

const express = require("express");
const router = express.Router();
const commentsCtrl = require("../../controllers/api/comments");

router.get("/:id/comments", commentsCtrl.getComment);

router.post("/:id/comments", commentsCtrl.addComment);

router.delete("/:id/comments/:commentId", commentsCtrl.deleteComment);

module.exports = router;

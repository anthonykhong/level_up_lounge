const express = require("express");
const router = express.Router();
const commentsCtrl = require("../../controllers/api/comments");

router.get("/:id/comments", commentsCtrl.getComment);

router.post("/:id/comments", commentsCtrl.addComment);

router.delete("/:id/comments/:commentId", commentsCtrl.deleteComment);

router.post("/:id/:commentId/like", commentsCtrl.addCommentLike);

router.delete("/:id/:commentId/like", commentsCtrl.removeCommentLike);

module.exports = router;

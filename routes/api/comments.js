const express = require("express");
const router = express.Router();
const commentsCtrl = require("../../controllers/api/comments");

router.post("/", commentsCtrl.addComment);

router.delete("/:id/comments/:commentId", commentsCtrl.deleteComment);

module.exports = router;

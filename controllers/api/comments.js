const Post = require("../../models/post");
const Comment = require("../../models/comment");
const User = require("../../models/user");

async function getComment(req, res) {
  try {
    const post = await Post.findById(req.params.id).populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post.comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}

async function addComment(req, res) {
  try {
    const user = req.user._id;
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comment = new Comment({
      text: req.body.text,
      user: user,
      userName: req.user.userName,
      likes: [],
    });
    await comment.save();
    post.comments.push(comment);
    await post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}

async function deleteComment(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );
    if (commentIndex === -1) {
      res.status(404).json({ message: "Comment not found" });
    } else {
      post.comments.splice(commentIndex, 1);
      await post.save();
      res.json(post);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getComment,
  addComment,
  deleteComment,
};

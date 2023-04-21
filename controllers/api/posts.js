const Post = require("../../models/post");

async function allPosts(req, res) {
  try {
    const posts = await Post.find({}).populate("user").sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getPost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function createPost(req, res) {
  try {
    req.body.user = req.user._id;
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updatePost(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deletePost(req, res) {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addLike(req, res) {
  try {
    const user = req.user._id;
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(user)) {
      post.likes.push(user);
      await post.save();
    }
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function removeLike(req, res) {
  try {
    const user = req.user._id;
    const post = await Post.findById(req.params.id);
    if (post.likes.includes(user)) {
      post.likes = post.likes.filter(
        (userId) => userId.toString() !== user.toString()
      );
      await post.save();
    }
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  allPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  addLike,
  removeLike,
};

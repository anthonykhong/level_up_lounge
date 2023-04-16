import * as postsAPI from "./posts-api";

export async function fetchAllPosts() {
  try {
    const posts = await postsAPI.allPosts();
    return posts;
  } catch (error) {
    throw new Error("Error fetching all posts: " + error.message);
  }
}

export async function fetchPostById(id) {
  try {
    const post = await postsAPI.getPost(id);
    return post;
  } catch (error) {
    throw new Error("Error fetching post by id: " + error.message);
  }
}

export async function createNewPost(postData) {
  try {
    const createdPost = await postsAPI.createPost(postData);
    return createdPost;
  } catch (error) {
    throw new Error("Error creating new post: " + error.message);
  }
}

export async function deletePostById(id) {
  try {
    const deletedPost = await postsAPI.deletePost(id);
    return deletedPost;
  } catch (error) {
    throw new Error("Error deleting post by id: " + error.message);
  }
}

export async function updatePostById(id, postData) {
  try {
    const updatedPost = await postsAPI.updatePost(id, postData);
    return updatedPost;
  } catch (error) {
    throw new Error("Error updating post by id: " + error.message);
  }
}

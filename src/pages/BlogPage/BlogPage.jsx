import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";
import PostsList from "../../components/PostsList/PostsList";
import "./BlogPage.css";

export default function BlogPage({ user }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await postsAPI.getAllPosts();
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);

  async function handleDeletePost(id) {
    try {
      await postsAPI.deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  function handleEditPost(id) {
    navigate(`/posts/${id}/edit`);
  }

  function handleCreatePostClick() {
    navigate("/posts/new");
  }

  async function handleAddLike(id) {
    try {
      const updatedPost = await postsAPI.addLike(id);
      setPosts(
        posts.map((post) => (post._id === updatedPost._id ? updatedPost : post))
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <img className="w-full h-24" src="../../public/images/banner.png" />
      </div>
      <div className="flex justify-center items-center flex-row py-4 bg-neutral-800">
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 text-5xl">
          All Posts
        </h1>
      </div>
      <div className="flex justify-center my-10">
        <input
          className="rounded-lg p-2 bg-gray-500"
          placeholder="Create Post.."
          onClick={handleCreatePostClick}
        ></input>
      </div>
      <PostsList
        user={user}
        posts={posts}
        handleDeletePost={handleDeletePost}
        handleEditPost={handleEditPost}
        handleAddLike={handleAddLike}
      />
    </div>
  );
}

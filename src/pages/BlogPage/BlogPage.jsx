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

  async function handleLike(id) {
    try {
      const post = posts.find((post) => post._id === id);
      if (post.likes.includes(user._id)) {
        await postsAPI.removeLike(id);
        setPosts(
          posts.map((post) => {
            if (post._id === id) {
              return {
                ...post,
                likes: post.likes.filter((like) => like !== user._id),
              };
            }
            return post;
          })
        );
      } else {
        await postsAPI.addLike(id);
        setPosts(
          posts.map((post) => {
            if (post._id === id) {
              return { ...post, likes: [...post.likes, user._id] };
            }
            return post;
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <img
          className="w-full h-24"
          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682013853/banner2_luvmvg.jpg"
        />
      </div>
      <div className="flex justify-center items-center flex-row py-4 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900">
        <h1 className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-700 via-violet-600 to-blue-600 text-5xl">
          Discussion Board
        </h1>
      </div>
      <div className="flex justify-center my-10">
        <input
          className="mx-64 flex-1 rounded-lg p-2 bg-gray-500"
          placeholder="Create Post.."
          onClick={handleCreatePostClick}
        ></input>
      </div>
      <PostsList
        user={user}
        posts={posts}
        handleDeletePost={handleDeletePost}
        handleEditPost={handleEditPost}
        handleLike={handleLike}
      />
    </div>
  );
}

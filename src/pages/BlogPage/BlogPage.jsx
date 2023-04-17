import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";
import PostsList from "../../components/PostsList/PostsList";
import "./BlogPage.css";

export default function BlogPage({ user, setUser }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const allPosts = await postsAPI.allPosts();
    setPosts(allPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleCreatePostClick() {
    navigate("/posts/new");
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
      <div className="flex justify-center mt-10">
        <input
          className="rounded-lg p-2 bg-gray-500"
          placeHolder="Create Post.."
          onClick={handleCreatePostClick}
        ></input>
      </div>
      <PostsList posts={posts} />
    </div>
  );
}

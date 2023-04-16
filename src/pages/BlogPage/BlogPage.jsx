import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";
import NewBlog from "../NewBlog/NewBlog";
import PostsList from "../../components/PostsList/PostsList";
import "./BlogPage.css";

export default function BlogPage({ user, setUser }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  function handleCreatePostClick() {
    navigate("/posts/new");
  }

  return (
    <div>
      <div>
        <img className="w-full h-24" src="../../public/images/banner.png" />
      </div>
      <div className="flex justify-center items-center flex-row py-4 bg-neutral-800">
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 text-5xl pr-6">
          All Posts
        </h1>
        <button
          className="px-4 py-2 rounded-md bg-gradient-to-br from-purple-600 to-cyan-600 text-white font-medium "
          onClick={handleCreatePostClick}
        >
          Create Post
        </button>
      </div>
      <PostsList posts={posts} />
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";
import NewBlog from "../NewBlog/NewBlog";

export default function BlogPage({ user, setUser }) {
  const navigate = useNavigate();

  function handleCreatePostClick() {
    navigate("/posts/new");
  }

  return (
    <div className="flex justify-center items-center flex-col m-10">
      <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 text-5xl">
        All Posts
      </h1>
      <div className="py-8 ml-auto">
        <button
          className="px-4 py-2 rounded-md bg-gradient-to-br from-purple-300 to-blue-600 text-white font-medium"
          onClick={handleCreatePostClick}
        >
          Create Post
        </button>
      </div>
    </div>
  );
}

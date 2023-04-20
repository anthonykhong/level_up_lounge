import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    async function getPost() {
      try {
        const postData = await postsAPI.getPost(id);
        setPost(postData);
      } catch (error) {
        console.error(error);
      }
    }
    getPost();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await postsAPI.updatePost(id, post);
      navigate("/posts");
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    setPost({ ...post, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <style>{`body { background-image: url("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjcyNDUyMzllYzMzNzQ1MWJmMDY5NjZiMjZmNDNkMDc0OTBjNWE0NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/I3LHUdpJsgcZQkSImh/giphy.gif"); }`}</style>
      <div>
        <img
          className="w-full h-24"
          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682028902/wallpaperflare.com_wallpaper_1_cqx5me.jpg"
        />
      </div>
      <div className="flex justify-center items-center flex-row py-4 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900">
        <h1 className="font-display animate-text bg-gradient-to-r from-purple-500 via-teal-500 to-blue-600 bg-clip-text text-transparent text-5xl text-5xl">
          Edit Post
        </h1>
      </div>
      <div className="bg-neutral-800 rounded-lg shadow-md border border-gray-200 p-8 my-20 md:mx-28 flex flex-col">
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="title" className="text-white">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={handleChange}
                className="font-display font-bold w-full px-3 py-4 rounded-lg bg-neutral-800 text-white focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="text-white">
                Content:
              </label>
              <textarea
                id="content"
                name="content"
                value={post.content}
                onChange={handleChange}
                className="text-gray-400 w-full px-3 pb-36 rounded-lg bg-neutral-800 focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <hr />
            <div className="flex items-center justify-center pt-16">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-white rounded-lg group bg-gradient-to-br from-pink-600 to-blue-600 group-hover:from-purple-300 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-800 rounded-md group-hover:bg-opacity-0">
                  <span className="font-display">Save</span> Changes
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

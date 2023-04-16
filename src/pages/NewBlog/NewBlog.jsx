import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";

export default function NewBlog({ user, setUser }) {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({ title: "", content: "" });

  function handleCancelPostClick() {
    navigate("/posts");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await postsAPI.createPost(postData);
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  }

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 text-5xl mb-16">
        New Post
      </h1>
      <div className="py-2 ml-auto">
        <button
          className="px-4 py-2 rounded-md bg-gradient-to-br from-purple-300 to-blue-600 text-white font-medium"
          onClick={handleCancelPostClick}
        >
          Cancel
        </button>
      </div>
      <form
        className="border border-4 border-indigo-500/75 rounded-xl w-full py-10 px-20"
        id="new-post"
        onSubmit={handleSubmit}
      >
        <div className="max-w-lg">
          <label
            for="small-input"
            className="block syne mb-2 text-sm font-medium text-white dark:text-white"
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="small-input"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={postData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            for="large-input"
            className="block syne mb-2 text-sm py-3 font-medium text-white dark:text-white"
          >
            Content:
          </label>
          <textarea
            type="text"
            name="content"
            id="large-input"
            placeholder="Enter text..."
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={postData.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <a href="/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-300 to-blue-600 group-hover:from-purple-300 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <input
                type="submit"
                value="Create Post"
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              />
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}

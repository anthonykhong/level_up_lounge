import React, { useState } from "react";
import "./NewBlogForm.css";

export default function NewBlogForm({ handleAddNewPost, navigate }) {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });

  function handleCancelPostClick() {
    navigate("/posts");
  }

  function handleChange(event) {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await handleAddNewPost(postData);
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
        <h1 className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-700 via-teal-400 to-violet-800 text-5xl">
          New Post
        </h1>
      </div>
      <div className="my-24 md:mx-28">
        <div className="border border-white bg-neutral-800 rounded-xl w-full">
          <div className="flex justify-end p-2">
            <button
              className="text-white rounded-lg hover:bg-neutral-600 py-2 px-2"
              onClick={handleCancelPostClick}
            >
              <img
                className="h-6"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682013449/delete_q7jh3x.png"
                alt="Comment icon"
              />
            </button>
          </div>
          <form className="px-20 py-10" id="new-post" onSubmit={handleSubmit}>
            <div className="max-w-lg">
              <label
                for="small-input"
                className="block mb-2 text-sm font-medium text-white"
              >
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="small-input"
                className="font-display font-bold rounded w-full py-2 px-3 text-white bg-neutral-700 "
                value={postData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                for="large-input"
                className="block syne mb-2 text-sm py-3 font-medium text-white"
              >
                Content:
              </label>
              <textarea
                type="text"
                name="content"
                id="large-input"
                placeholder="Enter text..."
                className="shadow appearance-none rounded w-full pt-4 pb-28 px-3 text-white bg-neutral-700"
                value={postData.content}
                onChange={handleChange}
              ></textarea>
            </div>
            <hr />
            <div className="flex items-center justify-center pt-8">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-white rounded-lg group bg-gradient-to-br from-pink-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-800 rounded-md group-hover:bg-opacity-0">
                  <span className="font-display">Create</span> Post
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

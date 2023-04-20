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
        <img className="w-full h-24" src="../../public/images/banner.png" />
      </div>
      <div className="flex justify-center items-center flex-row py-4 bg-neutral-800">
        <h1 className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 text-5xl">
          New Post
        </h1>
      </div>
      <div className="my-24 md:mx-28">
        <div className="border border-white bg-neutral-800 rounded-xl w-full py-10 px-20">
          <form id="new-post" onSubmit={handleSubmit}>
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
            <div className="flex items-center justify-center">
              <div className="mr-2">
                <button
                  className="text-white rounded-lg bg-red-800 hover:bg-red-900 py-4 px-8 mt-6"
                  onClick={handleCancelPostClick}
                >
                  Cancel
                </button>
              </div>
              <button
                type="submit"
                className="text-white rounded-lg bg-purple-500 hover:bg-purple-600 p-4 mt-6"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

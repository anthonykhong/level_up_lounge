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
      <div>
        <img className="w-full h-24" src="../../public/images/banner.png" />
      </div>
      <div className="flex justify-center items-center flex-row py-4 bg-neutral-800">
        <h1 className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 text-5xl">
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
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white rounded-lg bg-purple-500 hover:bg-purple-600 p-2 mt-6"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

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
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 text-5xl">
          Edit Post
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

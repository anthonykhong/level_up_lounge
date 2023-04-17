import React from "react";
import "./PostsListCard.css";

export default function PostsListCard({
  user,
  post,
  handleDeletePost,
  handleEditPost,
}) {
  function handleDelete() {
    handleDeletePost(post._id);
  }

  function handleEdit() {
    handleEditPost(post._id);
  }

  return (
    <div className="flex flex-col border rounded-lg m-8 p-10 ">
      <h2>{user.name}</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.date}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

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

  const currentUserCreatedPost = post.user === user._id;

  const date = new Date(post.date);
  const currentDate = date.toLocaleString();

  return (
    <div className="bg-neutral-300 rounded-lg shadow-md border border-gray-200 p-6 m-4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <h2>{post.user}</h2>
          <div>
            <p className="text-gray-700 font-semibold">{post.user.name}</p>
            <p className="text-gray-500 text-sm">{currentDate}</p>
          </div>
        </div>
        {currentUserCreatedPost && (
          <div className="flex">
            <button
              onClick={handleEdit}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded mr-4"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="mt-2 text-gray-500">{post.content}</p>
      </div>
    </div>
  );
}

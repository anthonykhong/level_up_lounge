import React, { useState } from "react";
import CommentPage from "../../pages/CommentPage/CommentPage";
import "./PostsListCard.css";

export default function PostsListCard({
  user,
  post,
  handleDeletePost,
  handleEditPost,
}) {
  const [showComments, setShowComments] = useState(false);

  function handleDelete() {
    handleDeletePost(post._id);
  }

  function handleEdit() {
    handleEditPost(post._id);
  }

  const currentUserCreatedPost = user._id === post.user._id;

  const date = new Date(post.date);
  const currentDate = date.toLocaleString();

  return (
    <div className="bg-neutral-300 rounded-lg shadow-md border border-gray-200 p-6 m-4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <h2>{post.user.name}</h2>
          <div>
            <p className="text-gray-500 text-sm pl-2">{currentDate}</p>
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
        <p className="mt-2 text-gray-500 py-6">{post.content}</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white mb-4"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentPage user={user} post={post} />}
    </div>
  );
}

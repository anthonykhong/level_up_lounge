import React, { useState } from "react";
import CommentPage from "../../pages/CommentPage/CommentPage";
import "./PostsListCard.css";

export default function PostsListCard({
  user,
  post,
  handleDeletePost,
  handleEditPost,
  handleLike,
}) {
  const [showComments, setShowComments] = useState(false);
  const currentUserPost = user._id === post.user._id;
  const date = new Date(post.date);
  const currentDate = date.toLocaleString();

  function handleDelete() {
    handleDeletePost(post._id);
  }

  function handleEdit() {
    handleEditPost(post._id);
  }

  function likeHandler() {
    handleLike(post._id);
  }

  return (
    <div className="bg-neutral-300 rounded-lg shadow-md border border-gray-200 p-6 m-4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2>{post.user.name}</h2>
          <p className="text-gray-500 text-sm">{currentDate}</p>
        </div>
        {currentUserPost && (
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
        <hr />
      </div>
      <div className="mt-2">
        <button
          className="px-4 py-2 rounded text-black mb-2"
          onClick={likeHandler}
        >
          <div className="flex flex-row items-center">
            <img
              className="h-6 mr-1"
              src={
                post.likes.length > 0
                  ? "./public/images/heartFilled.png"
                  : "./public/images/heartUnfilled.png"
              }
            />
            {post.likes.length}
          </div>
        </button>
        <button
          className="hover:bg-neutral-400 px-4 py-2 rounded text-white mb-2"
          onClick={() => setShowComments(!showComments)}
        >
          <div className="flex flex-row items-center">
            <img
              className="h-6"
              src="./public/images/comment.png"
              alt="Comment icon"
            />
          </div>
        </button>
        <hr />
        {showComments && <CommentPage user={user} post={post} />}
      </div>
    </div>
  );
}

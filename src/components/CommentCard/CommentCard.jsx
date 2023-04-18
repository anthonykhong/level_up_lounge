import React from "react";

export default function CommentCard({
  user,
  post,
  comment,
  handleDeleteComment,
  handleLike,
}) {
  const currentUserComment = comment.user._id === user._id;
  const date = new Date(post.date);
  const currentDate = date.toLocaleString();

  async function handleDelete() {
    try {
      await handleDeleteComment(comment._id);
    } catch (error) {
      console.log(error);
    }
  }

  function likeHandler() {
    handleLike(comment._id);
  }

  return (
    <div className="flex items-start justify-start border rounded-lg space-x-4 m-4">
      <div className="flex-1">
        <div className="flex items-center justify-between p-2">
          <h2 className="text-md font-medium">{comment.user.name}</h2>
          <span className="text-sm text-gray-500">{currentDate}</span>
        </div>
        <p className="mt-1 text-gray-800 p-2">{comment.text}</p>
        {currentUserComment && (
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        )}
      </div>
      <button
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white mb-4"
        onClick={likeHandler}
      >
        Like ({comment.likes.length})
      </button>
    </div>
  );
}

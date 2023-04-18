import React from "react";

export default function NewCommentForm({
  handleSubmit,
  handleChange,
  comment,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center rounded-md bg-gray-200 dark:bg-gray-800">
          <input
            className="flex-1 px-4 py-2 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            placeholder="Write a comment"
            type="text"
            value={comment}
            onChange={handleChange}
          />
          <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

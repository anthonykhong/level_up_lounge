import React from "react";

export default function NewCommentForm({
  handleSubmit,
  handleChange,
  comment,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center rounded-md text-white">
          <input
            className="flex-1 px-4 py-2 bg-transparent border rounded-lg mr-2"
            placeholder="Write a comment"
            type="text"
            value={comment}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-white rounded-lg group bg-gradient-to-br from-pink-600 to-teal-400 group-hover:from-purple-300 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-neutral-700 rounded-md group-hover:bg-opacity-0">
              <span className="font-display">Post</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

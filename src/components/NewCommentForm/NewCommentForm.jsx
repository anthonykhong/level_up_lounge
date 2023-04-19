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
          <button className="px-4 py-2 font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-600">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

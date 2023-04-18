import React from "react";

export default function CommentCard({ user, post, comment }) {
  return (
    <div className="flex items-start justify-start border rounded-lg space-x-4 m-4">
      <div className="flex-1">
        <div className="flex items-center justify-between p-2">
          <h2 className="text-md font-medium">{comment.user}</h2>
          <span className="text-sm text-gray-500">
            {new Date(comment.createdAt).toLocaleDateString()}
          </span>
        </div>
        <p className="mt-1 text-gray-800 p-2">{comment.text}</p>
      </div>
    </div>
  );
}

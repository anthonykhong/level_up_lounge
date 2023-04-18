import React from "react";

export default function CommentCard({ user, post, comment }) {
  return (
    <div>
      <h2>{comment.user}</h2>
      <h2>{comment.text}</h2>
    </div>
  );
}

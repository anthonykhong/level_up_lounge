import React from "react";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentList({
  user,
  comments,
  handleDeleteComment,
  handleLike,
}) {
  return (
    <div>
      <main>
        {comments.map((c, idx) => (
          <CommentCard
            user={user}
            comment={c}
            key={idx}
            handleDeleteComment={handleDeleteComment}
            handleLike={handleLike}
          />
        ))}
      </main>
    </div>
  );
}

import React from "react";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentList({
  user,
  post,
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
            post={post}
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

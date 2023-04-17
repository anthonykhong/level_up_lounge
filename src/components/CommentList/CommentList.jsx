import React from "react";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentList({ user, comments }) {
  return (
    <div>
      <main>
        {comments.map((c, idx) => (
          <CommentCard user={user} comment={c} index={idx} />
        ))}
      </main>
    </div>
  );
}

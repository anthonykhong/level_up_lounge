import React from "react";

export default function NewCommentForm({
  handleSubmit,
  handleChange,
  comment,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={comment} onChange={handleChange} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

import React from "react";
import NewComment from "../NewComment/NewComment";
import CommentList from "../../components/CommentList/CommentList";

export default function CommentPage() {
  return (
    <div>
      <>Comment Section</>
      <CommentList />
      <NewComment />
    </div>
  );
}

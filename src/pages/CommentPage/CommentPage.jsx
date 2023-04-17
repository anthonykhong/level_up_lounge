import { useState } from "react";
import NewComment from "../NewComment/NewComment";
import CommentList from "../../components/CommentList/CommentList";
import * as commentsAPI from "../../utilities/comments-api";

export default function CommentPage({ user, post }) {
  const [comments, setComments] = useState([]);

  const addCommentHandler = async (commentData) => {
    console.log(commentData);
    try {
      const newComment = await commentsAPI.addComment(post._id, commentData);
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <>Comment Section</>
      <CommentList user={user} comments={comments} setComments={setComments} />
      <NewComment addCommentHandler={addCommentHandler} />
    </div>
  );
}

import { useState, useEffect } from "react";
import NewComment from "../NewComment/NewComment";
import CommentList from "../../components/CommentList/CommentList";
import * as commentsAPI from "../../utilities/comments-api";

export default function CommentPage({ user, post }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        const fetchedComments = await commentsAPI.getComments(post._id);
        setComments(fetchedComments);
      } catch (error) {
        console.log(error);
      }
    }
    getComments();
  }, [post._id]);

  const handleAddComment = async (commentData) => {
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
      <CommentList
        post={post}
        user={user}
        comments={comments}
        setComments={setComments}
      />
      <NewComment
        setComments={setComments}
        handleAddComment={handleAddComment}
      />
    </div>
  );
}

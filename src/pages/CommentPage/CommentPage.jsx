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

  async function handleAddComment(commentData) {
    console.log(commentData);
    try {
      const newComment = await commentsAPI.addComment(post._id, commentData);
      setComments((prevComments) => [...prevComments, newComment]);
      const fetchedComments = await commentsAPI.getComments(post._id);
      setComments(fetchedComments);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDeleteComment(commentId) {
    commentsAPI
      .deleteComment(post._id, commentId)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((c) => c._id !== commentId)
        );
      })
      .catch((error) => console.log(error));
  }

  async function handleLike(commentId) {
    try {
      const comment = comments.find((c) => c._id === commentId);
      if (comment.likes.includes(user._id)) {
        await commentsAPI.removeCommentLike(post._id, commentId);
        setComments(
          comments.map((c) => {
            if (c._id === commentId) {
              return {
                ...c,
                likes: c.likes.filter((like) => like !== user._id),
              };
            }
            return c;
          })
        );
      } else {
        await commentsAPI.addCommentLike(post._id, commentId);
        setComments(
          comments.map((c) => {
            if (c._id === commentId) {
              return { ...c, likes: [...c.likes, user._id] };
            }
            return c;
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container bg-neutral-400 border rounded-lg mx-auto px-4 py-6">
      <h1 className="text-lg font-bold text-gray-900 mb-4">Comments</h1>
      <CommentList
        user={user}
        comments={comments}
        setComments={setComments}
        handleDeleteComment={handleDeleteComment}
        handleLike={handleLike}
      />
      <NewComment
        setComments={setComments}
        handleAddComment={handleAddComment}
      />
    </div>
  );
}

import { useState } from "react";
import NewCommentForm from "../../components/NewCommentForm/NewCommentForm";

export default function NewComment({ addCommentHandler }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addCommentHandler({ text: comment });
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };
  return (
    <div>
      <NewCommentForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        comment={comment}
      />
    </div>
  );
}

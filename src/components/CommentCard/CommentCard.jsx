import React from "react";

export default function CommentCard({
  user,
  comment,
  handleDeleteComment,
  handleLike,
}) {
  const currentUserComment = comment.user._id === user._id;
  const date = new Date(comment.date);
  const currentDate = date.toLocaleString();

  async function handleDelete() {
    try {
      await handleDeleteComment(comment._id);
    } catch (error) {
      console.log(error);
    }
  }

  function likeHandler() {
    handleLike(comment._id);
  }

  return (
    <div className="bg-neutral-700 rounded-lg shadow-md border border-gray-200 p-2 m-4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-white text-lg font-medium pr-2">
            {comment.user.name}
          </h2>
          <p className="text-sm text-gray-400">{currentDate}</p>
        </div>
        {currentUserComment && (
          <button
            onClick={handleDelete}
            className="hover:bg-neutral-600 px-2 py-2 rounded"
          >
            <div className="flex flex-row items-center">
              <img
                className="h-6"
                src="./public/images/delete.png"
                alt="Comment icon"
              />
            </div>
          </button>
        )}
      </div>
      <div>
        <p className="mt-1 text-white px-2 py-6">{comment.text}</p>
        <hr />
        <div className="mt-2">
          <button
            className="px-4 py-2 rounded text-black"
            onClick={likeHandler}
          >
            <div className="flex flex-row items-center text-white">
              <img
                className="h-6 mr-1"
                src={
                  comment.likes.length > 0
                    ? "./public/images/heartFilled.png"
                    : "./public/images/heartUnfilled.png"
                }
              />
              {comment.likes.length}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import CommentPage from "../../pages/CommentPage/CommentPage";

export default function PostsListCard({
  user,
  post,
  handleDeletePost,
  handleEditPost,
  handleLike,
}) {
  const [showComments, setShowComments] = useState(false);
  const currentUserPost = user._id === post.user._id;
  const date = new Date(post.date);
  const currentDate = date.toLocaleString();

  function handleDelete() {
    handleDeletePost(post._id);
  }

  function handleEdit() {
    handleEditPost(post._id);
  }

  function likeHandler() {
    handleLike(post._id);
  }

  return (
    <div className="bg-neutral-800 rounded-lg shadow-md border border-gray-200 p-6 mb-10 md:mx-28 flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="font-display animate-text bg-gradient-to-r from-red-500 via-purple-500 to-rose-500 bg-clip-text text-transparent pb-1">
            {post.user.name}
          </h2>
          <p className="text-gray-400 text-sm">{currentDate}</p>
        </div>
        {currentUserPost && (
          <div className="flex">
            <button
              onClick={handleEdit}
              className="hover:bg-neutral-600 px-2 py-2 rounded"
            >
              <div className="flex flex-row items-center">
                <img
                  className="h-6"
                  src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682013994/Edit_noqugx.png"
                  alt="Comment icon"
                />
              </div>
            </button>
            <button
              onClick={handleDelete}
              className="hover:bg-neutral-600 px-2 py-2 rounded"
            >
              <div className="flex flex-row items-center">
                <img
                  className="h-6"
                  src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682013449/delete_q7jh3x.png"
                  alt="Comment icon"
                />
              </div>
            </button>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-display text-white text-xl font-semibold">
          {post.title}
        </h3>
        <p className="text-gray-400 py-6">{post.content}</p>
        <hr />
      </div>
      <div className="mt-2">
        <button
          className="px-4 py-2 rounded text-white mb-2"
          onClick={likeHandler}
        >
          <div className="flex flex-row items-center">
            <img
              className="h-6 mr-1"
              src={
                post.likes.length > 0
                  ? "https://res.cloudinary.com/diw7vmgum/image/upload/v1682014169/heartFilled_xyvodg.png"
                  : "https://res.cloudinary.com/diw7vmgum/image/upload/v1682014134/heartUnfilled_waihpl.png"
              }
            />
            {post.likes.length}
          </div>
        </button>
        <button
          className="hover:bg-neutral-600 px-4 py-2 rounded text-white mb-2"
          onClick={() => setShowComments(!showComments)}
        >
          <div className="flex flex-row items-center">
            <img
              className="h-6"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682014097/comment_mdefor.png"
              alt="Comment icon"
            />
          </div>
        </button>
        <hr />
        {showComments && <CommentPage user={user} post={post} />}
      </div>
    </div>
  );
}

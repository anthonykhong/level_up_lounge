import React from "react";
import "./PostsList.css";
import PostsListCard from "../PostsListCard/PostsListCard";

export default function PostsList({
  user,
  posts,
  handleDeletePost,
  handleEditPost,
  handleAddLike,
}) {
  return (
    <>
      <main className="flex justify-center flex-col pb-4">
        {posts.map((p, idx) => (
          <PostsListCard
            post={p}
            user={user}
            handleDeletePost={handleDeletePost}
            handleEditPost={handleEditPost}
            handleAddLike={handleAddLike}
            index={idx}
            key={idx}
          />
        ))}
      </main>
    </>
  );
}

import React from "react";
import "./PostsList.css";
import PostsCard from "../PostsCard/PostsCard";

export default function PostsList({
  user,
  posts,
  handleDeletePost,
  handleEditPost,
  handleLike,
}) {
  return (
    <>
      <main className="flex justify-center flex-col pb-4">
        {posts.map((p, idx) => (
          <PostsCard
            post={p}
            user={user}
            handleDeletePost={handleDeletePost}
            handleEditPost={handleEditPost}
            handleLike={handleLike}
            index={idx}
            key={idx}
          />
        ))}
      </main>
    </>
  );
}

import React from "react";
import "./PostsList.css";
import PostsListCard from "../PostsListCard/PostsListCard";

export default function PostsList({
  user,
  posts,
  handleDeletePost,
  handleEditPost,
}) {
  return (
    <>
      <main className="flex justify-center flex-col">
        {posts.map((p, idx) => (
          <PostsListCard
            post={p}
            user={user}
            handleDeletePost={handleDeletePost}
            handleEditPost={handleEditPost}
            index={idx}
            key={idx}
          />
        ))}
      </main>
    </>
  );
}

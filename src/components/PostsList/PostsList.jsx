import React from "react";
import "./PostsList.css";
import PostsListCard from "../PostsListCard/PostsListCard";

export default function PostsList({ posts, handleDeletePost }) {
  return (
    <>
      <main className="flex justify-center flex-col">
        {posts.map((p, idx) => (
          <PostsListCard
            post={p}
            handleDeletePost={handleDeletePost}
            index={idx}
            key={idx}
          />
        ))}
      </main>
    </>
  );
}

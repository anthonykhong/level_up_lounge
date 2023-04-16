import React from "react";
import "./PostsListCard.css";

export default function PostsListCard({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </>
  );
}
